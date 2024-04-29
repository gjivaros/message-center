import { NestFactory } from '@nestjs/core';
import { WhatsappConnectorModule } from './whatsapp-connector.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(WhatsappConnectorModule);

  const config = new DocumentBuilder()
    .setTitle('Whatsapp connector')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(5003);
}
bootstrap();
