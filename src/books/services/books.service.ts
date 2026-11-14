import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { BooksScraper } from '../scrapers/books.scraper';
import { Book } from '../interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(private readonly booksScraper: BooksScraper) {}

  async scrapeAndSaveBooks(pages: number = 3): Promise<Book[]> {
    const books = await this.booksScraper.scrapeBooks(pages);

    const filePath = path.resolve(process.cwd(), 'books.json');
    await fs.writeFile(filePath, JSON.stringify(books, null, 2), 'utf-8');

    return books;
  }
}
