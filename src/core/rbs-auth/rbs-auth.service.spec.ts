import { Test, TestingModule } from '@nestjs/testing';
import { RbsAuthService } from './rbs-auth.service';

describe('RbsAuthService', () => {
  let service: RbsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbsAuthService],
    }).compile();

    service = module.get<RbsAuthService>(RbsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
