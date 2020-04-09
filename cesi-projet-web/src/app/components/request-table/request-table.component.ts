import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataRowModel } from '../../models/data-row-model';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-request-table',
    templateUrl: './request-table.component.html',
    styleUrls: ['./request-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestTableComponent implements OnInit {
    public displayedColumns: string[] = ['title', 'requester', 'dueDate', 'requestDate', 'status', 'priority'];
    public dataSource: MatTableDataSource<DataRowModel> = new MatTableDataSource<DataRowModel>([]);

    @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) public sort: MatSort;

    constructor(private readonly dataService: DataService) {}

    public ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.subscribeToDataService();
    }

    public applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    private subscribeToDataService(): void {
        this.dataService.filteredDataValuesChange().subscribe((datas: DataRowModel[]) => {
            this.dataSource.data = datas;
        });
    }
}
