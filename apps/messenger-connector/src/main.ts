import { NestFactory } from '@nestjs/core';
import { MessengerConnectorModule } from './messenger-connector.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MessengerConnectorModule);

  const config = new DocumentBuilder()
    .setTitle('Messenger connector')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(5001);
}
bootstrap();
