import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private router: Router, private animationBuilder: AnimationBuilder) {}

  ngOnInit() {
    this.applyButtonAnimationToAllButtons();
  }
  private applyButtonAnimationToAllButtons() {

    const buttons = document.querySelectorAll('.btn_anim');

    buttons.forEach((button: Element) => {
      const animationClicked = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0) scale(1.05)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px) scale(1.05)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(6px) scale(1.05)', boxShadow: '0px 0px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px) scale(1.05)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0) scale(1.05)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);
      const animationHoverUp = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0) scale(1.05)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);

      const animationHoverDown = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0) scale(1.05)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);

      button.addEventListener('click', () => {
        const player = animationClicked.create(button);
        player.play();
      });

      button.addEventListener('mouseenter', () => {
        const playerHoverUp = animationHoverUp.create(button);
        playerHoverUp.play();
      });

      button.addEventListener('mouseleave', () => {
        const playerHoverDown = animationHoverDown.create(button);
        playerHoverDown.play();
      });
    });
  }


  goToHome() {
    this.router.navigate(['/']);
  }

  goToSignUp() {
    this.router.navigate(['signUp']);
  }
}
