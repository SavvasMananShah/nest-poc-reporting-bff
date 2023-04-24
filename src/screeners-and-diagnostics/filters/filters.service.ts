import { Injectable } from '@nestjs/common';
import { RealizeReportsDataService } from '../../data-source/realize-reports-data/realize-reports-data.service';
import { FilterArgs, FilterData, IdValueTupple } from './filters.schema';

@Injectable()
export class FiltersService {
  constructor(
    private readonly realizeReportsDataService: RealizeReportsDataService,
  ) {}

  async getFilters(args: FilterArgs): Promise<FilterData> {
    const filterSuggestions = await this.realizeReportsDataService.getFilters(
      args,
    );
    return {
      schoolYears: filterSuggestions.schoolYears,
      programFamilies: filterSuggestions.programFamilies,
      programs: this.convertMapToIdValueMapList(filterSuggestions.programs),
      schools: this.convertMapToIdValueMapList(filterSuggestions.schools),
      teachers: this.convertMapToIdValueMapList(filterSuggestions.teachers),
      classes: this.convertMapToIdValueMapList(filterSuggestions.classes),
    };
  }

  private convertMapToIdValueMapList(field: {
    [key: string]: string;
  }): IdValueTupple[] {
    if (!field) return null;
    const idValueMapList: IdValueTupple[] = Array.from(
      Object.entries(field).map(([id, value]) => ({ id, value })),
    );
    return idValueMapList;
  }
}
