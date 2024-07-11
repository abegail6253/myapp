import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegistrationFormComponent }
];
