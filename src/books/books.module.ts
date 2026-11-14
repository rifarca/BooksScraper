import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { BooksScraper } from './scrapers/books.scraper';
import { ApiTokenMiddleware } from './middleware/api.middleware';



@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksScraper],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiTokenMiddleware)
      .forRoutes(BooksController); // Aplica el middleware a todas las rutas de este controlador
  }
}
