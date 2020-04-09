import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseResponseModel } from '../models/firebase-response-model';
import { RequestDialogModel } from '../models/request-dialog-model';

@Injectable({
    providedIn: 'root',
})
export class FirestoreService {
    constructor(private readonly firestore: AngularFirestore) {}

    public getRequests(): Observable<FirebaseResponseModel[]> {
        return this.firestore.collection<FirebaseResponseModel>('requests').valueChanges();
    }

    public async addRequest(result: RequestDialogModel): Promise<void> {
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
