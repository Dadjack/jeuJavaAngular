import { Component } from '@angular/core';
import { HeaderProfileComponent } from '../header-profile/header-profile.component';
import { Router } from '@angular/router';
import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';
import { ButtonAnimationService } from '../button-animation.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {

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

  goToChooseDifficulty() {
    setTimeout(() => {
      this.router.navigate(['difficulty']);
    }, 300);
  }
}
