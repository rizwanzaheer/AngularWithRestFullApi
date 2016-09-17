// main entry point
// angular file's
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

// custom file's
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS, appRouterProviders
])
.catch(err => console.error(err));
