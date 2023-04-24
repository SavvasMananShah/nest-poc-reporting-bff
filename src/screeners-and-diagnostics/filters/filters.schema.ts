import { ArgsType, Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class FilterData {
  @Field(() => [String], { nullable: true })
  public schoolYears: string[];

  @Field(() => [String], { nullable: 'itemsAndList' })
  public programFamilies: string[];

  @Field(() => [IdValueTupple], { nullable: 'itemsAndList' })
  public programs: IdValueTupple[];

  @Field(() => [IdValueTupple], { nullable: 'itemsAndList' })
  public schools: IdValueTupple[];

  @Field(() => [IdValueTupple], { nullable: 'itemsAndList' })
  public teachers: IdValueTupple[];

  @Field(() => [IdValueTupple], { nullable: 'itemsAndList' })
  public classes: IdValueTupple[];
}

@ObjectType()
export class IdValueTupple {
  @Field({ nullable: true })
  public id: string;

  @Field({ nullable: true })
  public value: string;
}

export enum FilterKeys {
  PROGRAMS = 'PROGRAMS',
  SCHOOLS = 'SCHOOLS',
  TEACHERS = 'TEACHERS',
  CLASSES = 'CLASSES',
  SCHOOL_YEAR = 'SCHOOL_YEAR',
  PROGRAM_FAMILY = 'PROGRAM_FAMILY',
}

registerEnumType(FilterKeys, {
  name: 'FilterKeys',
});

@ArgsType()
export class FilterArgs {
  @Field({ nullable: true })
  districtID: string;

  @Field({ nullable: true })
  schoolYear: string;

  @Field({ nullable: true })
  programFamily?: string;

  @Field(() => [String], { nullable: true })
  programIds?: string[];

  @Field(() => [String], { nullable: true })
  schoolIds?: string[];

  @Field(() => [String], { nullable: true })
  teacherIds?: string[];

  @Field(() => [FilterKeys], { nullable: true })
  filterKeys?: FilterKeys[];
}
