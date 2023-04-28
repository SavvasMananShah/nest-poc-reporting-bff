import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BearerRestDataSourceService {
  protected httpService: HttpService = new HttpService();
  constructor() {
    this.httpService.axiosRef.defaults.baseURL = 'baseURL';
    this.httpService.axiosRef.defaults.timeout = 123;
  }
}
