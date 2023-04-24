import { Module } from '@nestjs/common';
import { DataSourceModule } from '../data-source/data-source.module';
import { FiltersResolver } from './filters/filters.resolver';
import { FiltersService } from './filters/filters.service';

@Module({
  imports: [DataSourceModule],
  providers: [FiltersResolver, FiltersService],
})
export class ScreenersAndDiagnosticsModule {}
