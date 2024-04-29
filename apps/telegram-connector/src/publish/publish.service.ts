import { Constants } from '@app/contants';
import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PublishMessage } from './publish-dto';

@Injectable()
export class PublishService {
  async publish(inputs: PublishMessage) {
    try {
      await axios.post(`${Constants.CORE_API}/conversation`, {...inputs, canal: 'telegram'})
      return "OK"
    } catch (error) {
      console.log("publish message error", error)
      throw new BadRequestException({
        code: 'BAD_REQUEST',
        message: error?.response?.data ?? error.message
      })
    }
  }
}

