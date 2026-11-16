import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('APP_PORT') || 3000;
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('APP_NAME') || 'Books Scraper API')
    .setDescription(configService.get<string>('APP_DESCRIPTION'))
    .setVersion(configService.get<string>('APP_VERSION'))
    .addTag('Books', 'Endpoints para consultar el catálogo de libros')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  if (configService.get<string>('APP_SWAGGER_LANG') == 'es') {
    SwaggerModule.setup('sandbox', app, documentFactory, {
      customSiteTitle: configService.get<string>('APP_NAME'),
      customJsStr: `
      window.addEventListener('load', () => {
        const traducciones = {
          'Try it out': 'Probar',
          'Execute': 'Ejecutar',
          'Cancel': 'Cancelar',
          'Clear': 'Limpiar',
          'Parameters': 'Parámetros',
          'No parameters': 'Sin parámetros',
          'Request body': 'Cuerpo de la petición',
          'Responses': 'Respuestas',
          'Response body': 'Cuerpo de la respuesta',
          'Response headers': 'Cabeceras de respuesta',
          'Code': 'Código',
          'Description': 'Descripción',
          'Schemas': 'Esquemas',
          'Authorize': 'Autorizar',
          'Available authorizations': 'Autorizaciones disponibles',
          'Download': 'Descargar',
          'Example Value': 'Ejemplo',
          'Schema': 'Esquema'
        };

        const traducir = () => {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while ((node = walker.nextNode())) {
            const texto = node.nodeValue.trim();
            if (traducciones[texto]) {
              node.nodeValue = node.nodeValue.replace(texto, traducciones[texto]);
            }
          }
        };

        traducir();
        const observer = new MutationObserver(traducir);
        observer.observe(document.body, { childList: true, subtree: true });
      });
    `,
    });
  } 

  await app.listen(port);
}
bootstrap();
