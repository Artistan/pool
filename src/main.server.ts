import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import type { BootstrapContext } from '@angular/platform-browser';

// On the server, Angular requires a BootstrapContext to be passed to bootstrapApplication.
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
