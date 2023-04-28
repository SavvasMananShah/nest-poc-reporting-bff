import { Test, TestingModule } from '@nestjs/testing';
import { BearerRestDataSourceService } from './bearer-rest-data-source.service';

describe('BearerRestDataSourceService', () => {
  let service: BearerRestDataSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BearerRestDataSourceService],
    }).compile();

    service = module.get<BearerRestDataSourceService>(
      BearerRestDataSourceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
