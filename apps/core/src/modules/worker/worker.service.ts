import { Constants } from "@app/contants";
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, RmqRecordBuilder } from "@nestjs/microservices";
import { WorkerPayload } from "./worker.typings";

@Injectable()
export class WorkerService {
	constructor(
		@Inject(Constants.RMQ_CLIENT_SERVICE)
		private client: ClientProxy,
	) {}

	produce<T>({ channel, message, options = {} }: WorkerPayload<T>) {
		return new Promise((resolve) => {
			const record = new RmqRecordBuilder<T>(message).setOptions(options).build();
			
			console.info("___________________record", record);

			this.client.send(channel, record).subscribe((result) => {
				console.log("response", result)
				resolve(result);
			});
		});
	}
}
