import { Controller, Get, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(private readonly configService: ConfigService) { }
    @Get()
    @ApiExcludeEndpoint()
    @Redirect() // Sin argumentos, tomará lo que retorne la función
    redirectToSwagger() {
        const swaggerPath = this.configService.get<string>('APP_SWAGGER_PREFIX_URL') || '/sandbox'
        return {
            url: swaggerPath,
            statusCode: 302
        };
    }
}
