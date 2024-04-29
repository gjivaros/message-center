import { Injectable } from '@nestjs/common';
import { DataSourceService } from '../data-source/data-source';
import { CreateMessageDto } from './message.dto';

@Injectable()
export class MessageService {

  constructor(private readonly datasource: DataSourceService){}

  create(createMessageDto: CreateMessageDto) {
    return
  }

  findAll() {
    return `This action returns all message`;
  }

  conversactionMessages(id: string) {
    return //
  }

 

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
