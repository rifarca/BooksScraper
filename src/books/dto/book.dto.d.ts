import { Book } from '../interfaces/book.interface';
export declare class BookDto implements Book {
    title: string;
    image: string;
    desc: string;
    upc: string;
    price: string;
    availability: string;
    rating: string;
    detailUrl: string;
}
