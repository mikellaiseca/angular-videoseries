import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

}
