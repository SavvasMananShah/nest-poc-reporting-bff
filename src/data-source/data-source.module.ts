import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { RealizeReportsDataService } from './realize-reports-data/realize-reports-data.service';

@Module({
  imports: [HttpModule, CoreModule],
  providers: [RealizeReportsDataService],
  exports: [RealizeReportsDataService],
})
export class ServiceClientsModule {}
