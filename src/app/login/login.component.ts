import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel, NgForm} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';
  @Output() loggedInUser = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  CheckUserLogin() {
    this.loggedInUser.emit('true');
    this.router.navigate(['home/quote']);
  }
}
