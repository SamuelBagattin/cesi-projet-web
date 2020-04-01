import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toColor'
})
export class ToColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'haute': {
        return 'red';
      }
      case 'basse': {
        return 'blue';
      }
      case 'moyenne': {
        return 'green';
      }
      default: {
        return 'grey';
      }
    }
  }

}
