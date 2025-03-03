import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; //imports http client module
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes), provideHttpClient()]//adds the provideHttpClient module so that it can be used through the application
};

//a service is a class designed to be used by components