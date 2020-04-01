import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../repositories/firestore.service';
import {Subject} from 'rxjs';
import {RequestModel} from '../../models/RequestModel';
import {distinctUntilChanged, take} from 'rxjs/operators';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'requester', 'dueDate', 'requestDate', 'status', 'priority'];
  data: RequestModel[];

  constructor(private readonly firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getRequests().pipe(distinctUntilChanged()).subscribe(
      requests => {
      this.data = requests;
    }
    );
  }
}
