import { Module } from '@nestjs/common';
import { PublishModule } from './publish/publish.module';

@Module({
  imports: [PublishModule],
  controllers: [],
  providers: [],
})
export class MessengerConnectorModule {}
