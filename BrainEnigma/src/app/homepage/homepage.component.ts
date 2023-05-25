import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) {}

 goToProfile() {
  this.router.navigate(['profile']);
}

goToHome() {
  this.router.navigate(['/']);
}

goToChoose() {
  this.router.navigate(['choose']);
}

}
