import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // #11 Event Binding
  // template: `
  // <app-item-details (deleteRequest)="deleteItem($event)"></app-item-details>
  // `
  // template: `
  //   <button (click)="onSave()">Save</button>
  //   `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000)
  }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub)
    }
  }

  title = 'Hello World!'

  getMin(a: number, b: number) {
    if (a < b) {
      return a
    }

    return b
  }

  showText = false

  toggleText(event: any): void {
    this.showText = !this.showText
    console.log(event);

  }

  todaysDate = new Date()

  itemImageUrl = '../assets/phone.jpeg'

  isUnchanged = true

  // #11 Event Binding
  onSave() {
    console.log('click on save');
  }

  deleteItem(item: any) {
    console.log(item);
  }

  // #12 Angular Two-way Binding
  fontSizepx = 16

}
