import { Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';


export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];


