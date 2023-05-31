import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonAnimationService } from '../button-animation.service';
import { AnimationBuilder, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private buttonAnimationService: ButtonAnimationService, private animationBuilder: AnimationBuilder) { }

  ngOnInit() {
    this.applyButtonAnimationToAllButtons();
  }

  private applyButtonAnimationToAllButtons() {
    const buttons = document.querySelectorAll('.btn_anim');
    buttons.forEach((button: Element) => {
      const animation = this.animationBuilder.build([
        style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        animate('0.2s', keyframes([
          style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(6px)', boxShadow: '0px 0px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(3px)', boxShadow: '0px 3px 1px var(--box-shadow-color)' }),
          style({ transform: 'translateY(0)', boxShadow: '0px 6px 1px var(--box-shadow-color)' }),
        ]))
      ]);

      button.addEventListener('click', () => {
        const player = animation.create(button);
        player.play();
      });

      this.buttonAnimationService.addButton(button as HTMLButtonElement);
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