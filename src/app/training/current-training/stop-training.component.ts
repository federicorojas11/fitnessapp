import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>Detener el entrenamiento?</h1>
    <mat-dialog-actions>
      <p>You already got {{ passedData.progress }}%</p>
      <mat-dialog-content> </mat-dialog-content>
      <button mat-button [mat-dialog-close]="true">Si</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions> `,
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
