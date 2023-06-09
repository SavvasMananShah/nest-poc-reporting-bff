import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { FilterArgs } from '../../screeners-and-diagnostics/filters/filters.schema';

@Injectable()
export class RealizeReportsDataService {
  private readonly logger = new Logger(RealizeReportsDataService.name);
  constructor(private readonly httpService: HttpService) {}

  async getFilters(args: FilterArgs, token): Promise<FilterSuggestionsData> {
    const url = this.GET_FILTER_SUGGESTIONS_ROUTE(args.districtID);
    const body = {
      schoolYear: args.schoolYear,
      programFamily: args.programFamily,
      programIds: args.programIds,
      teacherIds: args.teacherIds,
      schoolIds: args.schoolIds,
      filterKeys: args.filterKeys,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.post<FilterSuggestionsData>(url, body, config).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.message);
          throw error;
        }),
      ),
    );
    console.log(data);

    return data;
  }

  GET_FILTER_SUGGESTIONS_ROUTE = (districtId: string): string =>
    `https://realize-reports-data-service.lstreporting.com/realize-reports-data-service/v1/district/${districtId}/filters`;
}

export interface FilterSuggestionsData {
  schoolYears: string[];
  programFamilies: string[];
  programs: {
    [key: string]: string;
  };
  schools: {
    [key: string]: string;
  };
  teachers: {
    [key: string]: string;
  };
  classes: {
    [key: string]: string;
  };
}
