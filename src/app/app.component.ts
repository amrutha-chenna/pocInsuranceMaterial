import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  loggedInUser(e) {
    this.loggedIn = e;
    console.log(this.loggedIn);
  }
}
