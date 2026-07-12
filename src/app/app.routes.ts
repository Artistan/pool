import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ScheduleComponent } from './pages/schedule.component';
import { GetInvolvedComponent } from './pages/get-involved.component';
import { SponsorsComponent } from './pages/sponsors.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Century Panther Touchdown Club' },
  { path: 'schedule', component: ScheduleComponent, title: 'Schedule | Century Panther Touchdown Club' },
  { path: 'get-involved', component: GetInvolvedComponent, title: 'Get Involved | Century Panther Touchdown Club' },
  { path: 'sponsors', component: SponsorsComponent, title: 'Sponsors | Century Panther Touchdown Club' },
  { path: 'about', component: AboutComponent, title: 'About | Century Panther Touchdown Club' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Century Panther Touchdown Club' },
  { path: '**', redirectTo: '' },
];
