import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) {}

goToHome() {
  this.router.navigate(['/']);
}

goToProfile() {
  this.router.navigate(['profile']);
}

goToLogIn() {
  this.router.navigate(['logIn']);
}

goToSignUp() {
  this.router.navigate(['signUp']);
}

goToChoose() {
  this.router.navigate(['choose']);
}

goToContact() {
  this.router.navigate(['contact']);
}

}
