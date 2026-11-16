# BooksScraper 📚

API desarrollada en **NestJS** que realiza web scraping sobre [Books to Scrape](https://books.toscrape.com/) utilizando **Puppeteer**.

<!-- TOC -->

- [BooksScraper 📚](#booksscraper-)
  - [📋 Prerrequisitos](#-prerrequisitos)
  - [⚙️ Instalación](#-instalación)
  - [📋 Config](#-config)
  - [🚀 Ejecución](#-ejecución)
  - [🔌 Uso](#-uso)
    - [Parámetros](#parámetros)
    - [Respuesta](#respuesta)

<!-- /TOC -->

\--

## 📋 Prerrequisitos

Asegúrate de tener instalado en tu entorno:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) *(Opcional, para ejecución en contenedores)*

---

## ⚙️ Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash

git clone https://github.com/rifarca/BooksScraper.git
cd BooksScraper
npm install

```

---

## 🚀 Ejecución

Selecciona el método que prefieras para levantar la aplicación:

🟢 Ejecutar con npm&#x20;

```bash

# Modo desarrollo (con recarga automática)
npm run start:dev

# Modo producción
npm run build
npm run start:prod

```

🔴 Ejecutar con Nest CLI

*Nota: Requiere tener instalado&#x20;*`@nestjs/cli`*&#x20;de forma global (*`npm i -g @nestjs/cli`*).*

```bash
# Modo desarrollo
nest start --watch

# Modo producción
nest build
nest start --prod
```

🐳 Ejecutar con Docker(Recomendado)

```bash

# Construir el ontenedor
docker compose up --build

```

---

# 📋 Config

la configuracion global esta en el archivo de entorno .env

```ini
APP_PORT=3553
APP_URL=localhost
APP_SCRAP_URL=https://books.toscrape.com
APP_SWAGGER_PREFIX_URL=/sandbox
APP_SWAGGER_LANG=es
APP_SCRAP_PAGES=3
APP_SCRAP_OUTPUT_FILE=books.json
APP_VERSION=0.0.6
APP_TOKEN=7a6diuhghgjk33bg22
APP_NAME=BooksScraper
APP_DESCRIPTION=API para Screapear Libros desde Books to Scrapear ... 
PUPPETEER_HEADLESS=true 
```

# 🔌 Uso

## 1. Sandbox

Una vez iniciado el servidor, abre un navegador en la url y puerto preconfigurado en .env

ej <https://localhost:3553> y te llevara al sanbox

## 2. Scrapear

Una vez iniciado el servidor, realiza una petición `GET` al siguiente endpoint:

```bash
curl -X 'GET' \
  'http://APP_URL:APP_PORT/books/scrape?pages=3' \
  -H 'accept: */*' \
  -H 'x-api-token: APP_TOKEN'

```

### Parámetros

| Parámetro | Tipo     | Descripción                                 | Requerido             |
| :-------- | :------- | :------------------------------------------ | :-------------------- |
| `pages`   | `number` | Cantidad de páginas del catálogo a extraer. | No (por defecto: `1`) |

### Respuesta

- **API:** Devuelve el listado de libros extraídos en formato `JSON`.

```json

  [
  {
    "title": "A Light in the Attic",
    "image": "https://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
    "price": "£51.77",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html",
    "desc": "Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love th Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love that Silverstein Need proof of his genius RockabyeRockabye baby in the treetopDont you know a treetopIs no safe place to rockAnd who put you up thereAnd your cradle tooBaby I think someone down heresGot it in for you Shel you never sounded so good more",
    "upc": "a897fe39b1053632"
  }
]

```

## 3. Descargar books.json

Una vez iniciado el servidor, realiza una petición `GET` al siguiente endpoint:

```bash
curl -X 'GET' \
  'http://APP_URL:APP_PORT/books/download \
  -H 'accept: */*' \
  -H 'x-api-token: APP_TOKEN'

```

### Respuestaa

- **Archivo local:** Guarda automáticamente una copia del resultado en `books.json` en la raíz del proyecto.
