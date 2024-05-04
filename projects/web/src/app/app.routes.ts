import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadChildren: () => import('./home/home.routes').then(m => m.routes)
    },
    {
        path: 'about',
        title: 'About',
        loadChildren: () => import('./about/about.routes').then(m => m.routes)
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**',
        title: 'Page not found!',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
