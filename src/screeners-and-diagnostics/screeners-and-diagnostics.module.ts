import { Module } from '@nestjs/common';
import { ServiceClientsModule } from '../data-source/data-source.module';
import { FiltersResolver } from './filters/filters.resolver';
import { FiltersService } from './filters/filters.service';

@Module({
  imports: [ServiceClientsModule],
  providers: [FiltersResolver, FiltersService],
})
export class ScreenersAndDiagnosticsModule {}
