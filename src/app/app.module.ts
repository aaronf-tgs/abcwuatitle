import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './search/search.module';
import { TokenInteceptorService } from './services/token-interceptor.service';


@NgModule({
	declarations: [
		AppComponent,
	],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SearchModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Enable DI for interceptors
    { provide: HTTP_INTERCEPTORS, useClass: TokenInteceptorService, multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
  }
}


function provideAnimations(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

