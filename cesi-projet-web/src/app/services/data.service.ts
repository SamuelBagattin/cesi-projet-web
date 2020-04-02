import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FirestoreService} from '../repositories/firestore.service';
import {DataRowModel} from '../models/data-row-model';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly firestoreService: FirestoreService) {
    this.subscribeToFirestore();
  }

  public readonly possibleFilters = ['high', 'low', 'mid'];
  public readonly defaultValue = 'none';
  private datas$: BehaviorSubject<DataRowModel[]> = new BehaviorSubject<DataRowModel[]>([]);
  private data: DataRowModel[];
  private filter = 'none';

  private nextFilterValues(): void {
    if (this.filter !== this.defaultValue) {
      this.datas$.next(this.data
        .filter(e => e
          .priority === this.filter));
    } else {
      this.datas$.next(this.data);
    }
  }

  public filteredDataValuesChange(): Observable<DataRowModel[]> {
    return this.datas$.asObservable();
  }

  public changePriorityFilter(value: string): void {
    this.filter = value;
    this.nextFilterValues();
  }

  private subscribeToFirestore() {
    this.firestoreService.getRequests().pipe(distinctUntilChanged()).subscribe(
      requests => {
        this.data = requests.map(
          obj => {
            return {
              description: obj.description,
              dueDate: `${obj.dueDate.toDate().getFullYear()}/${obj.dueDate.toDate().getMonth()}/${obj.dueDate.toDate().getDay()}`,
              requestDate: `${obj.requestDate.toDate().getFullYear()}/${obj.requestDate.toDate().getMonth()}/${obj.requestDate.toDate().getDay()}`,
              requester: obj.requester,
              status: obj.status,
              title: obj.title,
              priority: obj.priority,
            };
          }
        );

        this.nextFilterValues();
      }
    );
  }

}
