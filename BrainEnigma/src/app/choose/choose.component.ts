import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {

  constructor(private router: Router, private animationBuilder: AnimationBuilder) { }

  goToHome() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }

  goToChooseDifficulty() {
    setTimeout(() => {
      this.router.navigate(['difficulty']);
    }, 300);
  }
}
