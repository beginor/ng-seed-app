import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./about.component').then(m => m.AboutComponent),
    }
];
