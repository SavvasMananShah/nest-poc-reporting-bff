import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { DataSourceModule } from './data-source/data-source.module';
import { RbsAuthService } from './rbs-auth/rbs-auth.service';

@Module({
  imports: [HttpModule, DataSourceModule],
  providers: [
    RbsAuthService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  exports: [RbsAuthService],
})
export class CoreModule {}
