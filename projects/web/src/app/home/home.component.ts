import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzAlertComponent } from 'ng-zorro-antd/alert';

import { SvgIconComponent } from 'app-shared';

import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        AsyncPipe,
        NzButtonComponent,
        NzAlertComponent,
        SvgIconComponent,
    ],
    providers: [HomeService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    constructor(public vm: HomeService) { }

    public ngOnInit(): void { }

    protected onClick(): void {
        this.vm.updateMessage();
    }

}
