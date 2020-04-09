import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestDialogModel } from '../../models/request-dialog-model';
import { FirestoreService } from '../../repositories/firestore.service';
import { RequestFormComponent } from '../request-form/request-form.component';

@Component({
    selector: 'app-snackbar-actions',
    templateUrl: './snackbar-actions.component.html',
    styleUrls: ['./snackbar-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarActionsComponent {
    constructor(
        public dialog: MatDialog,
        private readonly firestoreService: FirestoreService,
        private snackBar: MatSnackBar,
    ) {}

    public openDialog(): void {
        const dialogRef = this.dialog.open(RequestFormComponent, {
            width: '75%',
            maxWidth: '700px',
            data: {
                requestDate: Date.now(),
                status: 'Opened',
                priority: 'low',
                description: '',
            },
        });

        dialogRef.afterClosed().subscribe((result: RequestDialogModel) => {
            this.firestoreService
                .addRequest(result)
                .then(() => {
                    this.snackBar.open(`Votre requête ${result.title} a bien été ajoutée`, "D'accord", {
                        duration: 2000,
                        panelClass: ['snackbarSuccess'],
                    });
                })
                .catch(() => {
                    this.snackBar.open(`Votre requête n'a pas été ajoutée`, "D'accord", {
                        duration: 2000,
                        panelClass: ['snackbarError'],
                    });
                });
        });
    }
}
