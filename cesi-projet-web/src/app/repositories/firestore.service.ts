import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentData, QuerySnapshot} from '@angular/fire/firestore';
import {RequestModel} from '../models/RequestModel';
import {Observable} from 'rxjs';
import {FirebaseApp} from '@angular/fire';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: AngularFirestore) {
  }

  public getRequests(): Observable<RequestModel[]> {
    return this.firestore.collection<RequestModel>('requests').valueChanges();
  }
}
