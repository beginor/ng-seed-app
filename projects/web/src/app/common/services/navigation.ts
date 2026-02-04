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
    public icon = signal<string>('appstore');
    public title = signal<string>('Angular App');

    constructor() {
        this.loadNavigationNodes();
    }

    private loadNavigationNodes(): void {
        const url = `${this.appBaseHref}navigation.json`;
        this.http.get<NavigationSetting>(url).subscribe({
            next: result => {
                this.icon.set(result.icon);
                this.title.set(result.title);
                this.nodes.set(result.nodes);
            }
        });
    }

}

export interface NavigationSetting {
    icon: string;
    title: string;
    nodes: NavigationNode[];
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
