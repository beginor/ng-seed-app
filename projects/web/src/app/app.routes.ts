import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then(m => m.routes)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.routes').then(m => m.routes)
    }
];
