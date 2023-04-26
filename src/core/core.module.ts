import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { RbsAuthService } from './rbs-auth/rbs-auth.service';

@Module({
  imports: [HttpModule],
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
