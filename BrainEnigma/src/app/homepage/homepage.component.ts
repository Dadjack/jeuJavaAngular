import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationBuilder, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private animationBuilder: AnimationBuilder) { }

  ngOnInit() {
    this.applyButtonAnimationToAllButtons();
  }

  private applyButtonAnimationToAllButtons() {

    const buttons = document.querySelectorAll('.btn_anim');

    buttons.forEach((button: Element) => {
      const animationClicked = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0) scale(1.03)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px) scale(1.03)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(6px) scale(1.03)', boxShadow: '0px 0px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px) scale(1.03)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0) scale(1.03)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);

      const animationHoverUp = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0) scale(1.03)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);

      const animationHoverDown = this.animationBuilder.build([
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0) scale(1.03)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
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
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToLogIn() {
    setTimeout(() => {
      this.router.navigate(['logIn']);
    }, 300);
  }

  goToSignUp() {
    setTimeout(() => {
      this.router.navigate(['signUp']);
    }, 300);
  }

  goToChoose() {
    setTimeout(() => {
      this.router.navigate(['choose']);
    }, 300);
  }

  goToContact() {
    setTimeout(() => {
      this.router.navigate(['contact']);
    }, 300);
  }
}

function addClickAnimation(event: Event | undefined, MouseEvent: { new(type: string, eventInitDict?: MouseEventInit | undefined): MouseEvent; prototype: MouseEvent; }) {
  throw new Error('Function not implemented.');
}
