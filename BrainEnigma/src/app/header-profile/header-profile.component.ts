import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent {

  constructor(private router: Router) {}
  
  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
