import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharacter',
})
export class FirstCharacterPipe implements PipeTransform {
  transform(value: string, length: number): unknown {
    const arabicRegex = /[\u0600-\u06FF]/;
    const englishRegex = /[a-zA-Z]/;
    const arRegex = /[^\u0600-\u06FF]/;
    const enRegex = /[^a-zA-Z ]/;

    let splitted;

    /**
     * @description `split()` split value with input length
     * @returns {array} the array of strings after separated
     */
    const split = (regex: any) => {
      return value
        .replace(/<[^>]*>/g, '')
        .split(' ')
        .slice(0, length)
        .map((text) => text.replace(regex, ''))
        .map((c) => c.charAt(0));
    };

    if (value && arabicRegex.test(value)) splitted = split(arRegex).join(' ');
    else if (value && englishRegex.test(value)) splitted = split(enRegex).join('');

    return splitted;
  }
}
