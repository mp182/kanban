import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { BoardDialogComponent } from '../dialogs/board-dialog/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  public boards$!: Observable<Board[]>;

  private boards!: Board[];
  private boardService: BoardService = inject(BoardService);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.boards$ = this.boardService.getUserBoards()
      .pipe(
        tap(value => this.boards = value),
      );
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  public openBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardService.createBoard({
          title: result,
          priority: this.boards.length + 1
        });
      }
    });
  }

}