# BooksScraper

API en NestJS que realiza web scraping sobre [Books to Scrape](https://books.toscrape.com/) usando Puppeteer.

## Instalación

```bash
npm install
```

## Ejecución

```bash




# Correr en Desarrollo

npm run start:dev

# Producción
npm run build
npm run start:prod
```

## Uso

Realiza una petición `GET` al endpoint:

```
GET http://localhost:3000/books/scrape?pages=3
```

Esto devolverá el listado de libros en formato JSON y guardará una copia en `books.json` en la raíz del proyecto.
