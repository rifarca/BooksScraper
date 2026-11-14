import { Book } from '../interfaces/book.interface';

export class BookDto implements Book {
  title: string;
  desc: string;

  upc: string;
  price: string;
  availability: string;
  rating: string;
  detailUrl: string;
}
