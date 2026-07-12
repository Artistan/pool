import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SponsorsSupportersComponent } from '../components/sponsors-supporters.component';
import {
  COACHES,
  GAME_EVENTS,
  GAME_INFO,
  PROGRAM_DATA_IS_PLACEHOLDER,
  ROSTER,
} from '../program-data';

@Component({
  selector: 'app-program',
  imports: [RouterLink, SponsorsSupportersComponent],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Game Day</div>
        <h1 class="display-5 display-font mb-2">Game Day <span class="text-silver">Program</span></h1>
        <p class="lead mb-0">Your digital program — the team, the coaches, tonight's theme, and the supporters who make it happen.</p>
      </div>
    </section>

    <!-- This week's game -->
    <section class="py-5">
      <div class="container">
        @if (isPlaceholder) {
          <div class="alert alert-warning small" role="alert">
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            Sample layout — the 2026 roster, coaching staff, and game details will be published
            here before the season opener.
          </div>
        }
        <div class="card card-panther">
          <div class="card-body p-4">
            <div class="row align-items-center gy-3">
              <div class="col-lg-8">
                <div class="section-kicker mb-1">This week</div>
                <h2 class="display-font h2 mb-2">Panthers vs. {{ game.opponent }}</h2>
                <div class="d-flex flex-wrap gap-4 small text-muted">
                  <span><i class="fa-solid fa-calendar-days text-navy me-2"></i>{{ game.date }}</span>
                  <span><i class="fa-solid fa-clock text-navy me-2"></i>Kickoff {{ game.kickoff }}</span>
                  <span><i class="fa-solid fa-location-dot text-navy me-2"></i>{{ game.location }}</span>
                </div>
              </div>
              <div class="col-lg-4 text-lg-end">
                <span class="badge badge-home fs-6 px-3 py-2">
                  <i class="fa-solid fa-star me-1"></i>{{ game.theme }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row gy-4 mt-1">
          @for (event of events; track event.title) {
            <div class="col-md-4">
              <div class="card card-panther h-100">
                <div class="card-body">
                  <div class="icon-badge mb-3"><i [class]="event.icon"></i></div>
                  <h3 class="h6 fw-bold">{{ event.title }}</h3>
                  <p class="small text-muted mb-0">{{ event.text }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Roster -->
    <section class="py-5 bg-panther-coal">
      <div class="container">
        <div class="text-center mb-4">
          <div class="section-kicker mb-2">The team</div>
          <h2 class="display-font h1">2026 Panthers Roster</h2>
        </div>
        <div class="table-responsive">
          <table class="table table-schedule table-striped align-middle bg-white rounded overflow-hidden">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              @for (player of roster; track $index) {
                <tr>
                  <td class="fw-bold">{{ player.number }}</td>
                  <td>{{ player.name }}</td>
                  <td>{{ player.position }}</td>
                  <td>{{ player.grade }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Coaching staff -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-4">
          <div class="section-kicker mb-2">Sideline leaders</div>
          <h2 class="display-font h1">Coaching Staff</h2>
        </div>
        <div class="row gy-4 justify-content-center">
          @for (coach of coaches; track coach.role) {
            <div class="col-6 col-md-4 col-lg-2">
              <div class="card card-panther h-100 text-center">
                <div class="card-body p-3">
                  <div class="icon-badge mx-auto mb-2"><i class="fa-solid fa-clipboard"></i></div>
                  <div class="fw-bold small">{{ coach.name }}</div>
                  <div class="small text-muted">{{ coach.role }}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Sponsors & supporters (shared with the Sponsors page) -->
    <app-sponsors-supporters />
  `,
})
export class ProgramComponent {
  isPlaceholder = PROGRAM_DATA_IS_PLACEHOLDER;
  game = GAME_INFO;
  events = GAME_EVENTS;
  roster = ROSTER;
  coaches = COACHES;
}
