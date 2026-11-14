import { BooksScraper } from '../scrapers/books.scraper';
import { Book } from '../interfaces/book.interface';
export declare class BooksService {
    private readonly booksScraper;
    constructor(booksScraper: BooksScraper);
    scrapeAndSaveBooks(pages?: number): Promise<Book[]>;
}
