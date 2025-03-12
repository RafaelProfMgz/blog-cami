import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('blog cats API') // O título da API
    .setDescription('The blog cats API description') // A descrição da API
    .setVersion('1.0') // Versão da API
    .addTag('blogcats') // Tag para categorizar as rotas da API
    .addBearerAuth() // Adiciona suporte para autenticação Bearer JWT
    .build();

  // Gera o documento Swagger para o NestJS
  const document = SwaggerModule.createDocument(app, config);

  // Configura a rota '/api' para acessar a documentação Swagger
  SwaggerModule.setup('api', app, document);
};
