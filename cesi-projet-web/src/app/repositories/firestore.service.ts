import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentData, QuerySnapshot} from '@angular/fire/firestore';
import {FirebaseResponseModel} from '../models/firebase-response-model';
import {Observable} from 'rxjs';
import {FirebaseApp} from '@angular/fire';
import {HttpClient} from '@angular/common/http';
import {DialogData} from '../models/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: AngularFirestore) {
  }

  public getRequests(): Observable<FirebaseResponseModel[]> {
    return this.firestore.collection<FirebaseResponseModel>('requests').valueChanges();
  }

  public async addRequest(result: DialogData) {
    await this.firestore.collection('requests').add({
      description: result.description,
      dueDate: result.dueDate,
      requestDate: new Date(result.requestDate),
      requester: result.requester,
      status: result.status,
      title: result.title,
      priority: result.priority,
    });
  }
}
