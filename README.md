<!-- TOC -->

- [BooksScraper 📚](#booksscraper-)
  - [📋 Documentacion](#-documentacion)
  - [📋 Prerrequisitos](#-prerrequisitos)
  - [⚙️ Instalación](#-instalación)
  - [🚀 Ejecución](#-ejecución)
  - [🔌 Uso](#-uso)
    - [Parámetros](#parámetros)
    - [Respuesta](#respuesta)

<!-- /TOC -->

# BooksScraper 📚

API desarrollada en **NestJS** que realiza web scraping sobre [Books to Scrape](https://books.toscrape.com/) utilizando **Puppeteer**.

---

## 📋 Documentacion

Asegúrate de tener instalado en tu entorno:

- \[Local] {http://localhost:3000/docs}

---

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

\<b>🟢 Ejecutar con npm (Recomendado)\</b>
<br />

```bash
# Modo desarrollo (con recarga automática)
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

\<b>🔴 Ejecutar con Nest CLI\</b>
<br />

*Nota: Requiere tener instalado&#x20;*`@nestjs/cli`*&#x20;de forma global (*`npm i -g @nestjs/cli`*).*

```bash
# Modo desarrollo
nest start --watch

# Modo producción
nest build
nest start --prod
```

\<b>🐳 Ejecutar con Docker\</b>
<br />

```bash
# 1. Construir la imagen de Docker
docker build -t books-scraper .

# 2. Ejecutar el contenedor exponiendo el puerto 3000
docker run -p 3000:3000 books-scraper
```

---

## 🔌 Uso

Una vez iniciado el servidor, realiza una petición `GET` al siguiente endpoint:

```http
GET http://localhost:3000/books/scrape?pages=3
```

### Parámetros

| Parámetro | Tipo     | Descripción                                 | Requerido             |
| :-------- | :------- | :------------------------------------------ | :-------------------- |
| `pages`   | `number` | Cantidad de páginas del catálogo a extraer. | No (por defecto: `1`) |

### Respuesta

- **API:** Devuelve el listado de libros extraídos en formato `JSON`.
- **Archivo local:** Guarda automáticamente una copia del resultado en `books.json` en la raíz del proyecto.
