import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonAnimationService {
  private buttons: HTMLButtonElement[] = [];

  addButton(button: HTMLButtonElement) {
    if (!this.buttons.includes(button)) {
      this.buttons.push(button);
      button.addEventListener('click', this.handleButtonClick);
    }
  }

  removeButton(button: HTMLButtonElement) {
    const index = this.buttons.indexOf(button);
    if (index !== -1) {
      this.buttons.splice(index, 1);
      button.removeEventListener('click', this.handleButtonClick);
    }
  }

  applyButtonAnimation() {
    this.buttons.forEach((button: Element) => {
      button.classList.add('btn-3d-animation');
      button.addEventListener('animationend', () => {
        button.classList.remove('btn-3d-animation');
      }, { once: true });
    });
  }

  private handleButtonClick = (event: Event) => {
    const button = event.target as HTMLButtonElement;
    button.classList.add('btn-3d-animation');
    button.addEventListener('animationend', () => {
      button.classList.remove('btn-3d-animation');
    }, { once: true });
  }
}
