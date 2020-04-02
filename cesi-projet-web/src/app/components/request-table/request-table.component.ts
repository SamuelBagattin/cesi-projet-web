import {Component, OnInit, ViewChild} from '@angular/core';
import {FirestoreService} from '../../repositories/firestore.service';
import {Subject} from 'rxjs';
import {FirebaseResponseModel} from '../../models/firebase-response-model';
import {distinctUntilChanged, take} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {DataRowModel} from '../../models/data-row-model';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss'],
})
export class RequestTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'requester', 'dueDate', 'requestDate', 'status', 'priority'];
  dataSource: MatTableDataSource<DataRowModel> = new MatTableDataSource<DataRowModel>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private readonly firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.firestoreService.getRequests().pipe(distinctUntilChanged()).subscribe(
      requests => {
        this.dataSource.data = requests.map(
          obj => {
            return {
              description: obj.description,
              dueDate: obj.dueDate.toDate().toLocaleDateString('fr-FR'),
              requestDate: obj.requestDate.toDate().toLocaleDateString('fr-FR'),
              requester: obj.requester,
              status: obj.status,
              title: obj.title,
              priority: obj.priority,
            };
          }
        );
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
