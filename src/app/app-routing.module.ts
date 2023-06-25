import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './create/create.component';
import { Ms365Component } from './ms365/ms365.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
{path:'home',component:HomeComponent,},
{path:'signin',component:SigninComponent,},
{path:'create',component:CreateComponent,},
{path:'ms365',component:Ms365Component,},
{path:'team',component:TeamComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
