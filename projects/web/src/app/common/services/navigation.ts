import { Injectable, signal, inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { API_ROOT } from 'app-shared';

@Injectable({
    providedIn: 'root'
})
export class Navigation {

    private http = inject(HttpClient);
    private appBaseHref = inject(APP_BASE_HREF);
    private apiRoot = inject(API_ROOT);

    public nodes = signal<NavigationNode[]>([]);

    constructor() {
        this.loadNavigationNodes();
    }

    private loadNavigationNodes(): void {
        const url = `${this.appBaseHref}navigarion.json`;
        this.http.get<NavigationNode[]>(url).subscribe(
            data => this.nodes.set(data)
        );
    }

}

export interface NavigationNode {
    id?: string;
    title?: string;
    url?: string;
    tooltip?: string;
    isHidden?: boolean;
    icon?: string;
    target?: string;
    frameUrl?: string;
    children?: NavigationNode[];
}
