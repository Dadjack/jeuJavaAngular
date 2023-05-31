import { AnimationBuilder, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonAnimationService } from '../button-animation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

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
    this.router.navigate(['/']);
  }
}

