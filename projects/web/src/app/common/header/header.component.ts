import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { UiService } from '../services/ui.service';


@Component ({
    selector: 'app-header',
    imports: [
        RouterModule,
        NzBreadCrumbModule,
        NzDropDownModule,
        NzIconModule,
        NzButtonModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(
        protected ui: UiService,
    ) {
    }
}
