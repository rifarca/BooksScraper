FROM node:20-slim

# 1. Instalar dependencias del sistema y Chromium para Puppeteer
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    libxss1 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Configuración de Puppeteer para usar el Chromium del sistema
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /usr/src/app

# 2. Declarar argumentos que se pueden inyectar durante el "docker build" (opcional si los necesitas en build-time)
ARG PORT
ARG BASE_URL
ARG DEFAULT_PAGES
ARG OUTPUT_FILE
ARG PUPPETEER_HEADLESS

# 3. Convertir los ARG en variables de entorno dentro de la imagen
ENV PORT=$PORT
ENV BASE_URL=$BASE_URL
ENV DEFAULT_PAGES=$DEFAULT_PAGES
ENV OUTPUT_FILE=$OUTPUT_FILE
ENV PUPPETEER_HEADLESS=$PUPPETEER_HEADLESS

# Copiar archivos e instalar dependencias de Node
COPY package*.json ./
RUN npm install

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# Exponer el puerto dinámico (si está definido en .env, usa 3000 por defecto)
EXPOSE 3000

CMD ["npm", "run", "start:prod"]