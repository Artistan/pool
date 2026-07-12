import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COACHES,
  FEATURED_SUPPORTERS,
  GAME_EVENTS,
  GAME_INFO,
  PROGRAM_DATA_IS_PLACEHOLDER,
  ROSTER,
  SUPPORTERS,
} from '../program-data';

@Component({
  selector: 'app-program',
  imports: [RouterLink],
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

    <!-- Sponsors & supporters -->
    <section class="py-5 bg-panther-dark">
      <div class="container text-center">
        <div class="section-kicker mb-2">They make Friday nights possible</div>
        <h2 class="display-font h1 mb-4">Sponsors &amp; Supporters</h2>

        <h3 class="h5 fw-bold text-silver mb-3">Business sponsors</h3>
        <div class="row justify-content-center gy-3 mb-4">
          @for (slot of [1, 2, 3]; track slot) {
            <div class="col-6 col-md-3">
              <div class="border border-secondary rounded-3 py-4 d-flex align-items-center justify-content-center"
                   style="border-style: dashed !important; color: var(--panther-muted);">
                <i class="fa-solid fa-store me-2"></i>Your logo here
              </div>
            </div>
          }
        </div>

        <h3 class="h5 fw-bold text-silver mb-2">Century Champions &amp; Legacy Builders</h3>
        @for (name of featuredSupporters; track name) {
          <p class="fs-5 fw-semibold mb-1">{{ name }}</p>
        }
        <h3 class="h6 fw-bold text-silver mt-4 mb-2">Prowl Backers</h3>
        @for (name of supporters; track name) {
          <p class="small mb-1" style="color: var(--panther-muted);">{{ name }}</p>
        }

        <div class="mt-4 d-flex flex-wrap gap-2 justify-content-center">
          <a routerLink="/get-involved" class="btn btn-silver">
            <i class="fa-solid fa-heart me-2"></i>Join the Touchdown Club
          </a>
          <a routerLink="/sponsors" class="btn btn-outline-silver">
            <i class="fa-solid fa-handshake me-2"></i>Become a sponsor
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProgramComponent {
  isPlaceholder = PROGRAM_DATA_IS_PLACEHOLDER;
  game = GAME_INFO;
  events = GAME_EVENTS;
  roster = ROSTER;
  coaches = COACHES;
  featuredSupporters = FEATURED_SUPPORTERS;
  supporters = SUPPORTERS;
}
