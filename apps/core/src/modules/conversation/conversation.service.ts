import { Injectable } from '@nestjs/common';
import { InitConvertation } from './conversation.dto';

@Injectable()
export class ConversationService {
  constructor(

  ) {}
 

  create(createConversationDto: InitConvertation) {
    console.log("____________crete conversation", createConversationDto)
    return 'This action adds a new conversation';
  }

  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }



  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
