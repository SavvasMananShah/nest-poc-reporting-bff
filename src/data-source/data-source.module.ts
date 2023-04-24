import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RealizeReportsDataService } from './realize-reports-data/realize-reports-data.service';

@Module({
  imports: [HttpModule],
  providers: [RealizeReportsDataService],
  exports: [RealizeReportsDataService],
})
export class DataSourceModule {}
