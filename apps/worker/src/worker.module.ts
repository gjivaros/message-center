import { DataSourceModule } from '@app/data-source';
import { Module } from '@nestjs/common';
import { MessageService } from './message/message.service';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  imports: [],
  controllers: [WorkerController],
  providers: [WorkerService, MessageService, DataSourceModule],
})
export class WorkerModule {}
