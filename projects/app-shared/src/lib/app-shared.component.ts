import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-app-shared',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      app-shared works!
    </p>
  `,
  styles: ``
})
export class AppSharedComponent {

}
