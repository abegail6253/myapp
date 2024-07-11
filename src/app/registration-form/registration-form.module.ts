import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { routes } from './app.routes'; // Import your routes configuration

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure RouterModule with your routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
