import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { RbsAuthService } from '../rbs-auth/rbs-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(private rbsAuthService: RbsAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [, , { req }] = context.getArgs();
    if (!req.isAuthenticated) {
      req.isAuthenticated = false;
    }
    try {
      const authScope = await this.rbsAuthService.validateToken(req.headers);
      req.userScope = authScope.userScope;
      req.error = authScope.error;
      req.isAuthenticated = !!authScope.userScope;
    } catch (err) {
      const { statusMessage } = err;
      this.logger.warn('error getting user scope:', statusMessage);
      return false;
    }
    return true;
  }
}
