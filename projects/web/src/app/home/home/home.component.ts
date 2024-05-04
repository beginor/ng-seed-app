import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButton, } from '@angular/material/button';

import { SvgIconComponent } from 'app-shared';

import { HomeService } from './home.service';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [SvgIconComponent, AsyncPipe, NgIf, MatButton],
    providers: [HomeService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    constructor(public vm: HomeService) { }

    public ngOnInit(): void { }

    public onClick(): void {
        this.vm.updateMessage();
    }

}
