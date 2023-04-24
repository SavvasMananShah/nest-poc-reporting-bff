import { Test, TestingModule } from '@nestjs/testing';
import { RealizeReportsDataService } from './realize-reports-data.service';

describe('RealizeReportsDataService', () => {
  let service: RealizeReportsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealizeReportsDataService],
    }).compile();

    service = module.get<RealizeReportsDataService>(RealizeReportsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
