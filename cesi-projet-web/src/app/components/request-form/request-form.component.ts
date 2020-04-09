import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestDialogModel } from '../../models/request-dialog-model';

@Component({
    selector: 'app-request-form',
    templateUrl: './request-form.component.html',
    styleUrls: ['./request-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestFormComponent {
    constructor(
        public dialogRef: MatDialogRef<RequestFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: RequestDialogModel,
    ) {}

    public onNoClick(): void {
        this.dialogRef.close();
    }
}
