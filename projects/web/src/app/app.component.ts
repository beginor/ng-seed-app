import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(nzIconService: NzIconService) {
        nzIconService.changeAssetsSource('assets/icons/antd/');
    }

}
