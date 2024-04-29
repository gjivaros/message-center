import { Constants } from "@app/contants";
import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { WorkerService } from "./worker.service";


@Global()
@Module({
	imports: [
		ClientsModule.register([
			{
				name: Constants.RMQ_CLIENT_SERVICE,
				transport: Transport.RMQ,
				options: {
					urls: [Constants.RMQ_URI],
					queue: Constants.RMQ_QUEUE,
					queueOptions: {
						durable: false,
					},
				},
			},
		]),
	],
	providers: [WorkerService],
	exports: [WorkerService],
})
export class WorkerModule {}
