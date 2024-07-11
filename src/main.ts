// main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RegistrationFormComponent } from './app/registration-form/registration-form.component'; // Adjust path if necessary

bootstrapApplication(RegistrationFormComponent, appConfig)
  .catch((err) => console.error(err));
