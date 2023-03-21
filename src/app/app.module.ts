import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';



import { AppComponent } from './app.component';
import { LogInComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CoverComponent } from './cover/cover.component';
import { CardsComponent } from './cards/cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './my-profile/popup/popup.component';
import { TableComponent } from './table/table.component';
import {MatInputModule} from '@angular/material/input';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ErrorComponent,
    MenuComponent,
    LogoutComponent,
    SideBarComponent,
    CoverComponent,
    CardsComponent,
    MyProfileComponent,
    PopupComponent,
    TableComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterTestingModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
