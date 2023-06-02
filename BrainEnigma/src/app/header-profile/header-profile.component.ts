import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent {

  constructor(private router: Router, private animationBuilder: AnimationBuilder) { }

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
        const playerReset = animationHoverUp.create(button);
        playerReset.play();
      });

      button.addEventListener('mouseleave', () => {
        const playerReset = animationHoverDown.create(button);
        playerReset.play();
      });
    });
  }



  goToProfile() {
    setInterval(() => {
      this.router.navigate(['profile']);
    }, 300);
  }

  goToHome() {
    setInterval(() => {
      this.router.navigate(['/']);
    }, 300);
  }
}