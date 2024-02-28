import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from '../../board.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent {

  public labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private boardService: BoardService,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
  ) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public handleTaskDelete() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }

}
