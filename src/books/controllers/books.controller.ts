import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../interfaces/book.interface';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags, ApiHeader, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('scrape')
  @ApiHeader({
    name: 'x-api-token',
    description: 'Token secreto de acceso a la API',
    required: true,
    example: 'mi-token-secreto-123',
  })
  @ApiOperation({
    summary: 'Scrapear y guardar libros',
    description: 'Inicia el proceso de scraping para extraer un número determinado de páginas de libros y guardarlos en la base de datos.'
  })
  @ApiQuery({
    name: 'pages',
    required: false,
    type: String,
    description: 'Número de páginas a scrapear. Si no se especifica, por defecto es 3.',
    example: 3,
  })
  @ApiResponse({
    status: 200,
    description: 'Operación exitosa. Devuelve la lista de libros obtenidos y guardados.',
    schema: {
      example: [
        {
          "title": "A Light in the Attic",
          "image": "https://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
          "price": "£51.77",
          "availability": "In stock",
          "rating": "Three",
          "detailUrl": "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html",
          "desc": "Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love th Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love that Silverstein Need proof of his genius RockabyeRockabye baby in the treetopDont you know a treetopIs no safe place to rockAnd who put you up thereAnd your cradle tooBaby I think someone down heresGot it in for you Shel you never sounded so good more",
          "upc": "a897fe39b1053632"
        },

      ],
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Error de validación. El parámetro pages no es un número válido o es menor a 1.',
    schema: {
      example: {
        statusCode: 400,
        message: 'Error de validación. El parámetro pages no es un número válido o es menor a 1.',
        error: 'Bad Request',
      },
    },
  })

  // ─── NUEVO: Documenta el error 401 en Swagger ───
  @ApiUnauthorizedResponse({
    description: 'No autorizado. El token de API es inválido o no fue proveído.',
    schema: {
      example: { statusCode: 401, message: 'Token de API inválido o ausente', error: 'Unauthorized' },
    },
  })
  async scrapeBooks(@Query('pages') pages?: string): Promise<Book[]> {

    let validPages = 3;

    if (pages !== undefined) {
      const parsed = Number(pages);

      // Validamos si no es un número, si es menor a 1, o si tiene decimales
      if (isNaN(parsed) || parsed < 1 || !Number.isInteger(parsed)) {
        throw new BadRequestException('El paramete \'pages\' debe ser un numbero entero y mayor a 0');
      }

      validPages = parsed;
    }

    return await this.booksService.scrapeAndSaveBooks(validPages);
  }
}



