import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-priority-filter',
    templateUrl: './priority-filter.component.html',
    styleUrls: ['./priority-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityFilterComponent {
    public filter: string;
    public filterValues: string[] = this.filterService.possibleFilters;
    public defaultValue: string = this.filterService.defaultValue;
    constructor(private readonly filterService: DataService) {}

    public setFilter(value: string): void {
        this.filterService.changePriorityFilter(value);
    }
}
