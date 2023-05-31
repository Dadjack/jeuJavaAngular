import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonAnimationService } from '../button-animation.service';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) { }

  goToHome() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToLogIn() {
    setTimeout(() => {
    this.router.navigate(['logIn']);
    }, 500);
  }

  goToSignUp() {
    setTimeout(() => {
    this.router.navigate(['signUp']);
    }, 500);
  }

  goToChoose() {
    setTimeout(() => {
    this.router.navigate(['choose']);
    }, 500);
  }

  goToContact() {
    setTimeout(() => {
    this.router.navigate(['contact']);
    }, 500);
  }
}  
