import { Book } from '../interfaces/book.interface';
export declare class BooksScraper {
    private readonly logger;
    scrapeBooks(totalPages?: number): Promise<Book[]>;
}
