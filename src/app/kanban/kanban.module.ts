import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { BoardListComponent } from './board-list/board-list.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
  ]
})
export class KanbanModule { }