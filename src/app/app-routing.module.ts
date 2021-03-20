import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMockUserComponent } from './components/create-mock-user/create-mock-user.component'
import { DisplayAllMockUsersComponent } from './components/display-all-mock-users/display-all-mock-users.component';
import { DisplaySinglemockUsersComponent } from './components/display-singlemock-users/display-singlemock-users.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'createmockuser', component:CreateMockUserComponent},
  {path: 'displayallusers', component:DisplayAllMockUsersComponent},
  {path: 'dispalysingleuser', component:DisplaySinglemockUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
