import { WORKER_CHANNEL_TYPE } from "@app/contants";
import { RmqRecordOptions } from "@nestjs/microservices";
export interface WorkerPayload<T> {
	channel: WORKER_CHANNEL_TYPE;
	message: T;
	options?: RmqRecordOptions;
}
