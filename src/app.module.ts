import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { BooksController } from './books/controllers/books.controller';
import { AppController } from './app.controller';
//agregamos ConfigModule

@Module({
  controllers: [AppController],
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    BooksModule,
  ],
})
export class AppModule { }