import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('scrape')
  async scrapeBooks(@Query('pages') pages?: string): Promise<Book[]> {

    let validPages = 3;

    if (pages !== undefined) {
      const parsed = Number(pages);

      // Validamos si no es un número, si es menor a 1, o si tiene decimales
      if (isNaN(parsed) || parsed < 1 || !Number.isInteger(parsed)) {
        throw new BadRequestException('Invalid pages parameter. It must be a positive integer.');
      }

      validPages = parsed;
    }

    return await this.booksService.scrapeAndSaveBooks(validPages);
  }
}
