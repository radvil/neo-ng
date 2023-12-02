import { Component } from '@angular/core';
import { NeoRipple } from '../ripple/ripple';

@Component({
  standalone: true,
  selector: 'neo-button',
  imports: [NeoRipple],
  styleUrl: './button.scss',
  template: `<button neoRipple>Neo Button</button>`,
})
export class NeoButton {}
