import { Routes } from '@angular/router';
import { NavLayoutComponent } from './shared/layouts/nav-layout/nav-layout.component';


export const appRoutes: Routes = [
  {
      path: 'home',
      component: NavLayoutComponent,
      loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule),
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
  },
  {
      path: '**',
      redirectTo: 'home'
  }  
];