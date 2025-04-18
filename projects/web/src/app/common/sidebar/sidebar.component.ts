import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { ThemeType } from '../services/ui.service';

@Component ({
    selector: 'app-nav-sidebar',
    imports: [
        CommonModule,
        RouterModule,
        NzIconModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    public theme = input<ThemeType>('dark')
    public collapsed = input(true)
}
