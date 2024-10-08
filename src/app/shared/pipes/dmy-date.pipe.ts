// Angular
import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dmyDate',
})
export class DMYDatePipe implements PipeTransform {
  datePipe: DatePipe;

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.datePipe = new DatePipe(locale);
  }
  /**
   * Transform
   * @param value: any
   * @param args: any
   */
  transform(value: string = '', disableHTML: boolean = false): any {
    if (value && value.length > 0) {
      const dateInStr = value.trim().split(' ')[0];
      const timeInStr = value.trim().split(' ')[1];

      const dateParts = dateInStr.trim().split('-');
      const timeParts = timeInStr.trim().split(':');

      const year = this.toInteger(dateParts[2]);
      const month = this.toInteger(dateParts[1]);
      const day = this.toInteger(dateParts[0]);
      const hour = this.toInteger(timeParts[0]);
      const second = this.toInteger(timeParts[1]);
      // tslint:disable-next-line:prefer-const
      let result = new Date();
      result.setUTCDate(day);
      result.setUTCMonth(month - 1);
      result.setUTCFullYear(year);
      result.setUTCHours(hour);
      result.setUTCMinutes(second);

      return disableHTML
        ? `${this.datePipe.transform(result, 'dd-MM-yyyy')} ${this.datePipe.transform(result, 'HH:mm')}`
        : `${this.datePipe.transform(result, 'dd-MM-yyyy')} <b>${this.datePipe.transform(result, 'HH:mm')}</b>`;
    }

    return '';
  }

  toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }
}
