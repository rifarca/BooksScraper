import { Injectable, Logger } from '@nestjs/common';
import puppeteer, { Browser, Page } from 'puppeteer';
import { Book } from '../interfaces/book.interface';

@Injectable()
export class BooksScraper {
  private readonly logger = new Logger(BooksScraper.name);

  /*
   Limpia los textos de coidgo ilegible
  */
  cleanText(input: string): string {
    if (!input) return '';
    return (
      input
        // 1. Normaliza los caracteres Unicode para separar las tildes de las letras (ej. "à" -> "a" + "`")
        .normalize('NFD')
        // 2. Elimina los diacríticos/tildes (rango Unicode de marcas de acentuación)
        .replace(/[\u0300-\u036f]/g, '')
        // 3. Reemplaza apóstrofes tipográficos comunes por vacíos o espacios si es necesario
        .replace(/[\u2018\u2019]/g, "'")
        // 4. Elimina cualquier símbolo o signo de puntuación, manteniendo solo letras, números y espacios
        .replace(/[^\w\s]/gi, '')
        // 5. Limpia espacios múltiples que hayan quedado en el proceso
        .replace(/\s+/g, ' ')
        .trim()
    );
  }
  /*
   Scrapea los libros
  */
  async scrapeBooks(totalPages = 3): Promise<Book[]> {
    let browser: Browser | undefined;
    const books: Book[] = [];

    try {
      browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],

      });

      const page: Page = await browser.newPage();

      for (let currentPage = 1; currentPage < totalPages; currentPage++) {
        const url =
          currentPage === 1
            ? 'https://books.toscrape.com/'
            : `https://books.toscrape.com/catalogue/page-${currentPage}.html`;

        this.logger.log(`Scraping list page: ${url}`);
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
        });

        // 1. Extraer los datos básicos y los links de los libros en la página actual
        const booksDataOnPage = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product_pod')).map((book) => {
            const link = book.querySelector('h3 a');

            const imageUrl = 'https://books.toscrape.com/';
            return {
              title: link?.getAttribute('title')?.trim() || '',
              image: imageUrl + book.querySelector('.image_container img.thumbnail')?.getAttribute('src')?.trim() || '',
              price: book.querySelector('.price_color')?.textContent?.trim() || '',
              availability: book.querySelector('.availability')?.textContent?.trim() || '',
              rating: book.querySelector('.star-rating')?.classList.item(1) || '',
              detailUrl: (link as HTMLAnchorElement)?.href || '',
            };
          });
        });

        // 2. Visitar la página de detalle de cada libro para extraer su descripción
        for (const bookInfo of booksDataOnPage) {
          let desc = '';

          let upc = '';
          if (bookInfo.detailUrl) {
            try {
              // Abrimos una pestaña nueva para el detalle o navegamos en la misma
              const detailPage = await browser.newPage();
              await detailPage.goto(bookInfo.detailUrl, {
                waitUntil: 'domcontentloaded',
              });

              desc = await detailPage.evaluate(() => {
                return (
                  document.querySelector('#product_description + p')?.textContent?.trim() ||
                  document.querySelector('#product_description')?.nextElementSibling?.textContent?.trim() ||
                  ''
                );
              });


              desc = this.cleanText(desc);
              
              upc = await detailPage.evaluate(() => {
                return (
                  document.querySelector('table.table-striped tr > td')?.textContent?.trim() || ''
                  
                );
              });
              // Limpiar la descri  pción antes de asignarla
              await detailPage.close();
            } catch (detailError) {
              this.logger.warn(`No se pudo obtener la descripción de: ${bookInfo.detailUrl}`);
            }
          }

          books.push({
            ...bookInfo,
            desc,
            upc,
          } as Book);
        }
      }

      return books;
    } catch (error) {
      this.logger.error('Error scraping books', error);
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}