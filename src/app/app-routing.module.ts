import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CoverComponent } from './cover/cover.component';
import { ErrorComponent } from './error/error.component';
import { LogInComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouteGuardService } from './service/route-guard.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component : LogInComponent} ,
  {path:'login',component : LogInComponent} ,
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },

  {
    path: 'MyProfile/:name', component: MyProfileComponent, canActivate: [RouteGuardService], children: [
      { path: '', component: CardsComponent },
      { path: 'table', component: TableComponent },
      {path:'users',component:UsersComponent}
  ]} ,
  {path:'sidebar',component : SideBarComponent} ,




  {path:'**',component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
