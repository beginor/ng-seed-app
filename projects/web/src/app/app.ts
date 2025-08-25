import { Component, inject, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzIconService } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { UiService } from './common/services/ui.service';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterModule,
        NzLayoutModule,
        SidebarComponent,
        HeaderComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {

    private appBaseHref = inject<string>(APP_BASE_HREF);
    private nzIconService = inject(NzIconService);
    protected ui = inject(UiService);

    public ngOnInit(): void {
        this.nzIconService.changeAssetsSource(this.appBaseHref);
    }


}
