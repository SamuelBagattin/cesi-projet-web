import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-priority-filter',
  templateUrl: './priority-filter.component.html',
  styleUrls: ['./priority-filter.component.scss']
})
export class PriorityFilterComponent implements OnInit {
  filter: string;
  filterValues: string[] = this.filterService.possibleFilters;
  defaultValue: string = this.filterService.defaultValue;
  constructor(private readonly  filterService: DataService) { }

  ngOnInit(): void {
  }

  setFilter(value: string) {
    this.filterService.changePriorityFilter(value);
  }
}
