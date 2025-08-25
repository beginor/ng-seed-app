import { Component, inject, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzIconService } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { Ui } from './common/services/ui';
import { Sidebar } from './common/sidebar/sidebar';
import { Header } from './common/header/header';

@Component({
    selector: 'app-root',
    imports: [
        RouterModule,
        NzLayoutModule,
        Sidebar,
        Header,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {

    private appBaseHref = inject<string>(APP_BASE_HREF);
    private nzIconService = inject(NzIconService);
    protected ui = inject(Ui);

    public ngOnInit(): void {
        this.nzIconService.changeAssetsSource(this.appBaseHref);
    }


}
