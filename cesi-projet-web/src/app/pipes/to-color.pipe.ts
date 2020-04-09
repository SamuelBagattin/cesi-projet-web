import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toPriorityClassColor',
})
export class ToPriorityClassColorPipe implements PipeTransform {
    public transform(value: string): string {
        switch (value) {
            case 'high': {
                return 'highPriority';
            }
            case 'low': {
                return 'lowPriority';
            }
            case 'mid': {
                return 'midPriority';
            }
            default: {
                return 'grey';
            }
        }
    }
}
