import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BearerRestDataSourceService } from './bearer-rest-data-source/bearer-rest-data-source.service';

@Module({
  imports: [HttpModule],
  providers: [BearerRestDataSourceService],
})
export class DataSourceModule {}
