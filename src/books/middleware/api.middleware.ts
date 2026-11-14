import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiToken = req.headers['x-api-token'];
    
    // Token esperado (puedes usar process.env.API_TOKEN)
    const validToken = process.env.API_TOKEN || 'mi-token-secreto-123';

    if (!apiToken || apiToken !== validToken) {
      throw new UnauthorizedException('Token de API inválido o ausente');
    }

    next(); // Si es correcto, continúa con la petición
  }
}