import { Component } from '@angular/core';
import { HeaderProfileComponent } from '../header-profile/header-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToChooseDifficulty() {
    this.router.navigate(['difficulty']);
  }

}
