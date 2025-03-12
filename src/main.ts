import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura o Swagger usando o arquivo 'swagger.ts'
  setupSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
