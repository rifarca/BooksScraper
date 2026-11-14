import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { BooksScraper } from './scrapers/books.scraper';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksScraper],
})
export class BooksModule {}
