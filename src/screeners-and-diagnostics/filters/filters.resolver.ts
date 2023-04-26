import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { FilterArgs, FilterData } from './filters.schema';
import { FiltersService } from './filters.service';

@Resolver(() => FilterData)
export class FiltersResolver {
  constructor(private readonly filtersService: FiltersService) {}

  @Query(() => FilterData)
  async filters(@Args() args: FilterArgs, @Context() ctx): Promise<FilterData> {
    return this.filtersService.getFilters(args, ctx.req.userScope.token);
  }
}
