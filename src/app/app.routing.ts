import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { SignupComponent } from "app/signup/signup.component";


export const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
   // { path: 'homepage', component: HomePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });