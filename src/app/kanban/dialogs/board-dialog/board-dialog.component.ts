import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrl: './board-dialog.component.scss'
})
export class BoardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
