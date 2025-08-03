
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from "aws-amplify"

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import outputs from '../amplify-output.json';


if (environment.production) {
  enableProdMode();
}

Amplify.configure(outputs);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
