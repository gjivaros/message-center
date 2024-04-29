import { NestFactory } from '@nestjs/core';
import { TelegramConnectorModule } from './telegram-connector.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(TelegramConnectorModule);

  const config = new DocumentBuilder()
    .setTitle('Telegram connector')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(5002);
}
bootstrap();
