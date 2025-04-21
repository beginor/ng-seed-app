import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { ThemeType } from '../services/ui.service';
import { NavigationService } from '../services/navigation.service';

@Component ({
    selector: 'app-nav-sidebar',
    imports: [
        CommonModule,
        RouterModule,
        NzIconModule,
        NzMenuModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    public theme = input<ThemeType>('dark')
    public collapsed = input(true)

    constructor(
        protected vm: NavigationService,
        protected router: Router,
    ) { }

    protected navigateByUrl(url: string): void {
        this.router.navigateByUrl(url);
    }

}
