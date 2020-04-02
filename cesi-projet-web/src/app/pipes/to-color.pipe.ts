import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toColor'
})
export class ToColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'hight': {
        return 'red';
      }
      case 'low': {
        return 'blue';
      }
      case 'mid': {
        return 'green';
      }
      default: {
        return 'grey';
      }
    }
  }

}
