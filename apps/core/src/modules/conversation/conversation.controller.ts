import { WORKER_CHANNEL } from '@app/contants';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkerService } from '../worker/worker.service';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './create-conversation.dto';

@Controller('conversation')
@ApiTags("Convertation")
export class ConversationController {
  constructor(private readonly conversationService: ConversationService,
    private readonly workerService: WorkerService
  ) {}

  @Post()
  create(@Body() createConversationDto: CreateConversationDto) {
    this.workerService.produce<CreateConversationDto>({channel: WORKER_CHANNEL.newMessage, message:createConversationDto})
    return "OK"
  }

  @Get()
  findAll() {
    return this.conversationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversationService.remove(+id);
  }
}
