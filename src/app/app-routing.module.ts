import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{path:'team',component:TeamComponent,},
{path:'signin',component:SigninComponent,},
{path:'create',component:CreateComponent,},
{path:'app',component:AppComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
