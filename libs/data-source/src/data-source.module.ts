import { Global, Module } from '@nestjs/common';
import { DataSourceService } from './data-source.service';

@Global()
@Module({
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class DataSourceModule {}
