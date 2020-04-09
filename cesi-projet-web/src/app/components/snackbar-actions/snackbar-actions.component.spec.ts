import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarActionsComponent } from './snackbar-actions.component';

describe('SnackbarActionsComponent', () => {
    let component: SnackbarActionsComponent;
    let fixture: ComponentFixture<SnackbarActionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SnackbarActionsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackbarActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
