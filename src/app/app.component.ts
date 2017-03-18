import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router:Router) {}

  goToAbout(){
    this.router.navigateByUrl('about');
  }

  goToLogin(){
    this.router.navigateByUrl('login');    
  }

  goToRecharge(){
        this.router.navigateByUrl('recharge-card');
  }
}

