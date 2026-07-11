import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Game {
  week: number;
  date: string;
  opponent: string;
  home: boolean;
  time: string;
  result?: string;
}

@Component({
  selector: 'app-schedule',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">2026 Season</div>
        <h1 class="display-5 display-font mb-2">Game <span class="text-silver">Schedule</span></h1>
        <p class="lead mb-0">Pack the stands. Wear the navy &amp; silver.</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="alert alert-warning small" role="alert">
          <i class="fa-solid fa-triangle-exclamation me-2"></i>
          Placeholder schedule — kickoff times and opponents will be updated when the official
          2026 slate is announced.
        </div>

        <div class="table-responsive">
          <table class="table table-schedule table-striped align-middle">
            <thead>
              <tr>
                <th scope="col">Week</th>
                <th scope="col">Date</th>
                <th scope="col">Opponent</th>
                <th scope="col">Location</th>
                <th scope="col">Kickoff</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              @for (game of games; track game.week) {
                <tr>
                  <td class="fw-bold">{{ game.week }}</td>
                  <td>{{ game.date }}</td>
                  <td class="fw-semibold">{{ game.opponent }}</td>
                  <td>
                    <span class="badge" [class]="game.home ? 'badge-home' : 'badge-away'">
                      <i class="fa-solid me-1" [class]="game.home ? 'fa-house' : 'fa-bus'"></i>
                      {{ game.home ? 'Home' : 'Away' }}
                    </span>
                  </td>
                  <td>{{ game.time }}</td>
                  <td class="text-muted">{{ game.result || '—' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="row gy-4 mt-4">
          <div class="col-md-6">
            <div class="card card-panther h-100">
              <div class="card-body">
                <h2 class="h5 fw-bold"><i class="fa-solid fa-house text-navy me-2"></i>Home game day</h2>
                <p class="small text-muted mb-0">
                  Gates open 90 minutes before kickoff. The booster club runs concessions and the
                  spirit wear table at every home game — stop by and say hi, or better yet,
                  <a routerLink="/get-involved">take a shift</a>.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-panther h-100">
              <div class="card-body">
                <h2 class="h5 fw-bold"><i class="fa-solid fa-bus text-navy me-2"></i>Away game caravans</h2>
                <p class="small text-muted mb-0">
                  Panthers travel well. Watch club announcements for fan bus sign-ups and caravan
                  meet-up times for road games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ScheduleComponent {
  // Placeholder slate — replace with the official schedule when released.
  games: Game[] = [
    { week: 1, date: 'Fri, Aug 28', opponent: 'TBA — Season Opener', home: true, time: '7:00 PM' },
    { week: 2, date: 'Fri, Sep 4', opponent: 'TBA', home: false, time: '7:00 PM' },
    { week: 3, date: 'Fri, Sep 11', opponent: 'TBA', home: true, time: '7:00 PM' },
    { week: 4, date: 'Fri, Sep 18', opponent: 'TBA', home: false, time: '7:00 PM' },
    { week: 5, date: 'Fri, Sep 25', opponent: 'TBA — Homecoming', home: true, time: '7:00 PM' },
    { week: 6, date: 'Fri, Oct 2', opponent: 'TBA', home: false, time: '7:00 PM' },
    { week: 7, date: 'Fri, Oct 9', opponent: 'TBA — Senior Night', home: true, time: '7:00 PM' },
    { week: 8, date: 'Wed, Oct 14', opponent: 'TBA', home: false, time: '7:00 PM' },
    { week: 9, date: 'Wed, Oct 21', opponent: 'Section Playoffs begin', home: true, time: 'TBA' },
  ];
}
