import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Components/users/users.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ProfileComponent,
    UserDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
