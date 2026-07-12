import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DONATE_URL, TEAM_CALENDAR_SUBSCRIBE_URL } from './site-links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RCHS Panthers Football Boosters';
  currentYear = new Date().getFullYear();
  donateUrl = DONATE_URL;
  calendarSubscribeUrl = TEAM_CALENDAR_SUBSCRIBE_URL;

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/schedule', label: 'Schedule', exact: false },
    { path: '/get-involved', label: 'Get Involved', exact: false },
    { path: '/sponsors', label: 'Sponsors', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
}
