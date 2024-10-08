export class QueryParam {
  start: number = 0;
  length: number = 10;
  'search[value]': string = '';
  [key: string]: string | number | boolean; // used for table headers

  constructor(QueryParam?: Partial<QueryParam>) {
    Object.assign(this, QueryParam);
  }
}
