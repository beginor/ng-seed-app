import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
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
        @Inject(APP_BASE_HREF) appBaseHref: string,
        nzIconService: NzIconService,
        protected ui: UiService,
    ) {
        console.log(appBaseHref);
        nzIconService.changeAssetsSource(appBaseHref);
    }

}
