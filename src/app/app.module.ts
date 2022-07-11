import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
