import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RequestFormComponent} from '../request-form/request-form.component';
import {FirestoreService} from '../../repositories/firestore.service';
import {RequestDialogModel} from '../../models/request-dialog-model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-actions',
  templateUrl: './snackbar-actions.component.html',
  styleUrls: ['./snackbar-actions.component.scss']
})
export class SnackbarActionsComponent {

  constructor(public dialog: MatDialog, private readonly firestoreService: FirestoreService, private snackBar: MatSnackBar) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestFormComponent, {
      width: '75%',
      maxWidth: '700px',
      data: {
        requestDate: Date.now(),
        status: 'Opened',
        priority: 'low',
        description: ''
      }
    });

    dialogRef.afterClosed().subscribe((result: RequestDialogModel) => {
      this.firestoreService.addRequest(result).then(_ => {
        this.snackBar.open(`Votre requête ${result.title} a bien été ajoutée`, 'D\'accord', {
          duration: 2000,
          panelClass: ['snackbarSuccess']
        });
      }).catch(_ => {
        this.snackBar.open(`Votre requête n'a pas été ajoutée`, 'D\'accord', {
          duration: 2000,
          panelClass: ['snackbarError']
        });
      });
    });
  }

}
