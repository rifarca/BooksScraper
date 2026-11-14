"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BooksScraper_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksScraper = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_1 = __importDefault(require("puppeteer"));
let BooksScraper = BooksScraper_1 = class BooksScraper {
    constructor() {
        this.logger = new common_1.Logger(BooksScraper_1.name);
    }
    cleanText(input) {
        if (!input)
            return '';
        return (input
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, ' ')
            .trim());
    }
    async scrapeBooks(totalPages = 3) {
        let browser;
        const books = [];
        try {
            browser = await puppeteer_1.default.launch({
                headless: true,
                executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
            });
            const page = await browser.newPage();
            for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
                const url = currentPage === 1
                    ? 'https://books.toscrape.com/'
                    : `https://books.toscrape.com/catalogue/page-${currentPage}.html`;
                this.logger.log(`Scraping list page: ${url}`);
                await page.goto(url, {
                    waitUntil: 'domcontentloaded',
                });
                const booksDataOnPage = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('.product_pod')).map((book) => {
                        const link = book.querySelector('h3 a');
                        return {
                            title: link?.getAttribute('title')?.trim() || '',
                            desc: '',
                            price: book.querySelector('.price_color')?.textContent?.trim() || '',
                            availability: book.querySelector('.availability')?.textContent?.trim() || '',
                            rating: book.querySelector('.star-rating')?.classList.item(1) || '',
                            detailUrl: link?.href || '',
                        };
                    });
                });
                for (const bookInfo of booksDataOnPage) {
                    let desc = '';
                    let upc = '';
                    if (bookInfo.detailUrl) {
                        try {
                            const detailPage = await browser.newPage();
                            await detailPage.goto(bookInfo.detailUrl, {
                                waitUntil: 'domcontentloaded',
                            });
                            desc = await detailPage.evaluate(() => {
                                return (document.querySelector('#product_description + p')?.textContent?.trim() ||
                                    document.querySelector('#product_description')?.nextElementSibling?.textContent?.trim() ||
                                    '');
                            });
                            desc = this.cleanText(desc);
                            upc = await detailPage.evaluate(() => {
                                return (document.querySelector('table.table-striped tr > td')?.textContent?.trim() || '');
                            });
                            await detailPage.close();
                        }
                        catch (detailError) {
                            this.logger.warn(`No se pudo obtener la descripción de: ${bookInfo.detailUrl}`);
                        }
                    }
                    books.push({
                        ...bookInfo,
                        desc,
                        upc,
                    });
                }
            }
            return books;
        }
        catch (error) {
            this.logger.error('Error scraping books', error);
            throw error;
        }
        finally {
            if (browser) {
                await browser.close();
            }
        }
    }
};
exports.BooksScraper = BooksScraper;
exports.BooksScraper = BooksScraper = BooksScraper_1 = __decorate([
    (0, common_1.Injectable)()
], BooksScraper);
//# sourceMappingURL=books.scraper.js.map