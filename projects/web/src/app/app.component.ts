import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzIconService } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { UiService } from './common/services/ui.service';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';

@Component ({
    selector: 'app-root',
    imports: [
        RouterModule,
        NzLayoutModule,
        SidebarComponent,
        HeaderComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(
        nzIconService: NzIconService,
        protected ui: UiService,
    ) {
        nzIconService.changeAssetsSource ('assets/icons/antd/');
    }

}
