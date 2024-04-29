import { Constants } from "@app/contants";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { WorkerModule } from "./worker.module";

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(WorkerModule, {
      transport: Transport.RMQ,
      options: {
        urls: [Constants.RMQ_URI],
        queue: Constants.RMQ_QUEUE,
        

        queueOptions: {
          durable: false,
        },
      },
    });

  await microservice.listen();

  console.log(` worker is runing on`);
}
bootstrap().catch(console.error);
