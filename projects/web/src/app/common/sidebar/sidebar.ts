import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { ThemeType } from '../services/ui';
import { Navigation } from '../services/navigation';

@Component ({
    selector: 'app-nav-sidebar',
    imports: [
        CommonModule,
        RouterModule,
        NzIconModule,
        NzMenuModule,
    ],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class SidebarComponent {

    public theme = input<ThemeType>('dark')
    public collapsed = input(true)

    protected vm = inject(Navigation);
    protected router = inject(Router);

    protected navigateByUrl(url: string): void {
        this.router.navigateByUrl(url);
    }

}
