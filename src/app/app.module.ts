// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here
    AppRoutingModule,
    RouterModule // Include RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
