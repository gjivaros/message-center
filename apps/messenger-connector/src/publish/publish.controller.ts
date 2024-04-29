import { Body, Controller, Post } from '@nestjs/common';
import { PublishService } from './publish.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { PublishMessage } from './publish-dto';

@Controller()
@ApiTags('Publish')
@ApiHeader({ name: 'x-api-key' })
export class PublishController {
  constructor(private readonly messengerConnectorService: PublishService) {}

  @Post()
  publish(
    @Body()
    inputs: PublishMessage,
  ) {
    return this.messengerConnectorService.publish(inputs);
  }
}
