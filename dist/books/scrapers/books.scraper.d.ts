import { Book } from '../interfaces/book.interface';
export declare class BooksScraper {
    private readonly logger;
    cleanText(input: string): string;
    scrapeBooks(totalPages?: number): Promise<Book[]>;
}
