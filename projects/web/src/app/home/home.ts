import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { UiService } from '../common/services/ui';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        AsyncPipe,
        NzButtonComponent,
        NzAlertComponent,
        NzIconModule,
    ],
    providers: [HomeService],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

    constructor(
        protected ui: UiService,
        protected vm: HomeService
    ) { }

    public ngOnInit(): void {
        this.ui.breadcrumbs.set([
            { label: '首页' }
        ])
    }

    protected onClick(): void {
        this.vm.updateMessage();
    }

}
