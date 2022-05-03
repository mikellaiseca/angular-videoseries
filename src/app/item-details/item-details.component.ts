import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  template: '<button (click)="delete()">Delete</button>',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Output() deleteRequest = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit('item name')
  }

}
