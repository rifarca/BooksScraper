import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('scrape')
  async scrapeBooks(@Query('pages') pages?: string): Promise<Book[]> {
    const totalPages = pages ? parseInt(pages, 10) : 3;
    const validPages = isNaN(totalPages) || totalPages < 1 ? 3 : totalPages;

    return await this.booksService.scrapeAndSaveBooks(validPages);
  }
}
