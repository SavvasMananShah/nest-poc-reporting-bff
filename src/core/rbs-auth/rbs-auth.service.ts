import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import {
  AuthHeaders,
  AuthScope,
  AuthenticationTokenTypes,
  ErrorMessages,
  UserScope,
} from './rbs-auth.model';

@Injectable()
export class RbsAuthService {
  RBS_AUTH_SCOPE_ROUTE = '/oauth/token/auth_scope';
  baseUrl = 'https://rr-auth-gateway.nightly.savvasrealizedev.com/sapi';
  auth = {
    username: 'kzm1jt2hK00BglsXpxzGwI6BOsspkyH8',
    password: 's8NukMGBGxFnW6RIg9ze5vnINQzKFtph',
  };
  private readonly logger = new Logger(RbsAuthService.name);

  constructor(private readonly httpService: HttpService) {}

  public async validateToken(authHeaders: AuthHeaders): Promise<AuthScope> {
    let userScope;
    try {
      this.logger.log('RbsAuthService: Inside validateToken');
      const { authorization } = authHeaders;
      if (!authorization) {
        throw new Error(ErrorMessages.MISSING_TOKEN);
      }
      const [tokenType, tokenValue] = authorization.split(' ');
      if (tokenType.toLowerCase() !== AuthenticationTokenTypes.BEARER) {
        throw new Error(ErrorMessages.INVALID_AUTH_TOKEN);
      }
      //   const { baseUrl, auth } = this.config.get('RBS');

      const scopeUrl = `${this.baseUrl}${this.RBS_AUTH_SCOPE_ROUTE}`;

      const headers = { access_token: tokenValue };

      const { data } = await firstValueFrom(
        this.httpService.get<UserScope>(scopeUrl, {
          headers,
          auth: this.auth,
        }),
      );

      return {
        userScope: {
          ...data,
          token: tokenValue,
        },
      };
    } catch (err) {
      this.logger.error('Error in getting authScope:', err);

      throw new AxiosError(
        ErrorMessages.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED.toString(),
      );
    }
  }
}
