import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sharedService: SharedService) {


  }
  title = 'Jokes';
  get isLogin() {return !this.sharedService.isLoggedIn};
}
