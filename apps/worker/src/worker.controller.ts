import { WORKER_CHANNEL } from "@app/contants";
import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateConversationDto } from "./message/message.dto";
import { MessageService } from "./message/message.service";

@Controller()
export class WorkerController {
	constructor(private readonly messageService: MessageService) {}

	@MessagePattern(WORKER_CHANNEL.newMessage)
	create(@Payload() payload: CreateConversationDto) {
		console.log("J'ai recu un nouveau message", payload)
		return this.messageService.newMessage(payload)
	}

	@MessagePattern(WORKER_CHANNEL.messageResponse)
	update(@Payload() payload: any) {
		console.log("new message response", payload)
		
	}

	
}
