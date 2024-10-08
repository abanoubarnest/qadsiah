import { Pipe, PipeTransform } from '@angular/core';
import { readFileAsync } from '../helpers/file-reader';

@Pipe({
  name: 'previewLocalImage',
})
export class PreviewLocalImagePipe implements PipeTransform {
  async transform(src: File | string): Promise<string> {
    if (typeof src == 'string') {
      return await src;
    } else {
      return await readFileAsync(src);
    }
  }
}
