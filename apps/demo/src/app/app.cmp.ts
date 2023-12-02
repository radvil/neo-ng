import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NeoButton } from '@neo/ng-ui';

@Component({
  standalone: true,
  selector: 'demo-root',
  templateUrl: './app.cmp.html',
  styleUrl: './app.cmp.scss',
  imports: [RouterModule, NeoButton],
})
export class AppCmp {}
