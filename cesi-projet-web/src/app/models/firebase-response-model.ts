import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface FirebaseResponseModel {
  description: string;
  dueDate: Timestamp;
  requestDate: Timestamp;
  requester: string;
  status: string;
  title: string;
  priority: string;
}
