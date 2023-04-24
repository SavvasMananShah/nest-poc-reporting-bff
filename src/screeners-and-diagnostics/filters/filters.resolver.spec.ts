import { Test, TestingModule } from '@nestjs/testing';
import { FiltersResolver } from './filters.resolver';

describe('FiltersResolver', () => {
  let resolver: FiltersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltersResolver],
    }).compile();

    resolver = module.get<FiltersResolver>(FiltersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
