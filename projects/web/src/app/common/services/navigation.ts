import { Injectable, Inject, signal } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { API_ROOT } from 'app-shared';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    public nodes = signal<NavigationNode[]>([]);

    constructor(
        private http: HttpClient,
        @Inject(APP_BASE_HREF) private appBaseHref: string,
        @Inject(API_ROOT) private apiRoot: string,
    ) {
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
