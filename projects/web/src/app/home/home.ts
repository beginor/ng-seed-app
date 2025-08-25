import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { Ui as UiService } from '../common/services/ui';
import { Home as HomeService } from '../common/services/home';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        AsyncPipe,
        NzButtonComponent,
        NzAlertComponent,
        NzIconModule,
    ],
    providers: [Home],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home implements OnInit {

    protected ui = inject(UiService);
    protected vm = inject(HomeService);

    public ngOnInit(): void {
        this.ui.breadcrumbs.set([
            { label: '首页' }
        ])
    }

    protected onClick(): void {
        this.vm.updateMessage();
    }

}
