import { Routes } from '@angular/router';
import { HoomeComponent } from '../hoome/hoome.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
    {path:'',component:HoomeComponent},
    {path:'login',component:LoginComponent}
];
