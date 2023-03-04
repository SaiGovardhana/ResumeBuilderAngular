import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './routeguards/LoggedInGuard';
import { LoggedOutGuard } from './routeguards/LoggedOutGuard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:"",pathMatch:"full",component:HomeComponent,canActivate:[LoggedOutGuard]},
{path:"dashboard",component:BuilderComponent,canActivate:[LoggedInGuard]},
{path:"signup",component:SignupComponent,canActivate:[LoggedOutGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
