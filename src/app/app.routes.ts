import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ScheduleComponent } from './pages/schedule.component';
import { GetInvolvedComponent } from './pages/get-involved.component';
import { SponsorsComponent } from './pages/sponsors.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Century Panthers Football Booster Club' },
  { path: 'schedule', component: ScheduleComponent, title: 'Schedule | Century Panthers Boosters' },
  { path: 'get-involved', component: GetInvolvedComponent, title: 'Get Involved | Century Panthers Boosters' },
  { path: 'sponsors', component: SponsorsComponent, title: 'Sponsors | Century Panthers Boosters' },
  { path: 'about', component: AboutComponent, title: 'About | Century Panthers Boosters' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Century Panthers Boosters' },
  { path: '**', redirectTo: '' },
];
