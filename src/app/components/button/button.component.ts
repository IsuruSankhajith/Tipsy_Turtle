import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;

  constructor() {
    this.text = ''; // Initialize text property
    this.color = ''; // Initialize color property
  }
}
