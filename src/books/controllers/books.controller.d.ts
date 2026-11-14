import { BooksService } from '../services/books.service';
import { Book } from '../interfaces/book.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    scrapeBooks(pages?: string): Promise<Book[]>;
}
