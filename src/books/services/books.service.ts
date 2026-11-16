import { Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import * as path from "path";
import { BooksScraper } from "../scrapers/books.scraper";
import { Book } from "../interfaces/book.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BooksService {
  constructor(
    private readonly booksScraper: BooksScraper,
    private readonly configService: ConfigService,
  ) { }

  async scrapeAndSaveBooks(pages: number = 3): Promise<Book[]> {
    const books = await this.booksScraper.scrapeBooks(pages);
    const booksFile = this.configService.get<string>("APP_SCRAP_OUTPUT_FILE");
    const filePath = path.resolve(process.cwd() + "/src", booksFile);
    await fs.writeFile(filePath, JSON.stringify(books, null, 2), "utf-8");
    return books;
  }
}
