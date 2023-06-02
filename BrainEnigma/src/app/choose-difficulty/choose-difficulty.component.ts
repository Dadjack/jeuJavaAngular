import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-difficulty',
  templateUrl: './choose-difficulty.component.html',
  styleUrls: ['./choose-difficulty.component.css']
})
export class ChooseDifficultyComponent {

  constructor(private router: Router, private animationBuilder: AnimationBuilder) { }

  goToHome() {
    this.router.navigate(['/']);
  }

}
