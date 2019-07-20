import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'MovieTime!';
  username: string;
  isLoggedIn: any;
  footerData: string = 'Copyright@UI & Markup Team, Infosys Limited';
  constructor(private router: Router) {

  }
  ngOnInit() {
  }
  logoutClick(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  ngDoCheck(){
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (this.isLoggedIn) {
      this.username = sessionStorage.getItem('username');
    }
  }
}
