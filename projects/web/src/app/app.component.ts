import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';
}
