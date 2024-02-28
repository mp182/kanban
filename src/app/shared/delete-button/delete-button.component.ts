import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {

  public canDelete!: boolean;

  @Output() delete = new EventEmitter<boolean>();

  public prepareForDelete() {
    this.canDelete = true;
  }

  public cancel() {
    this.canDelete = false;
  }

  public deleteBoard() {
    this.delete.emit(true);
    this.canDelete = false;
  }

}