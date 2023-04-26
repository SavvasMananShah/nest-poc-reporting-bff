export interface AuthContext {
  authScope: AuthScope;
}

export interface AuthScope {
  userScope?: UserScope;
  error?: any;
  headers?: AuthHeaders;
  isAuthenticated?: any;
}

export interface UserScope {
  userId: string;
  scope: string;
  accessInfo: AccessInfo;
  token: string;
  classes?: any;
}

export interface AccessInfo {
  username: string;
  role: string[];
  organizations: string[];
}

export interface AuthHeaders {
  authorization?: string;
  userid?: string;
}

export enum ErrorMessages {
  AUTHENTICATION_ERROR = 'Not authenticated.',
  UNAUTHORIZED = 'Unauthorized',
  MISSING_TOKEN = 'Missing Authorization token',
  FORBIDDEN = 'FORBIDDEN',
  INVALID_VALUE_PASSED = 'Invalid value passed for ',
  INVALID_AUTH_TOKEN = 'Invalid Auth Token',
  THROTTLE_MAX_QUEUE = 'There are too many concurrent requests',
  THROTTLE_QUEUE_TIMEOUT = 'Timeout waiting for throttled queue',
}

export enum AuthenticationTokenTypes {
  BASIC = 'basic',
  BEARER = 'bearer',
}
