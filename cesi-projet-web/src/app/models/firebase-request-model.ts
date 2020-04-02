import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface FirebaseRequestModel {
  description: string;
  dueDate: Timestamp;
  requestDate: Timestamp;
  requester: string;
  status: string;
  title: string;
  priority: string;
}
