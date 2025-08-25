import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { UiService } from '../services/ui';


@Component ({
    selector: 'app-header',
    imports: [
        RouterModule,
        NzBreadCrumbModule,
        NzDropDownModule,
        NzIconModule,
        NzButtonModule,
    ],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {

    protected ui: UiService = inject(UiService);

}
