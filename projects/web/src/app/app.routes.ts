import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.routing').then(m => m.routes)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.routing').then(m => m.routes)
    }
];
