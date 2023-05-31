import { Component, OnInit } from '@angular/core';
import { ButtonAnimationService } from './button-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BrainEnigma';
  
  constructor(private buttonAnimationService: ButtonAnimationService) { }

  ngOnInit() {
    this.buttonAnimationService.applyButtonAnimation();
  }
}
