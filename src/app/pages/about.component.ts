import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BOARD_MEMBERS } from '../club-board';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">About the Club</div>
        <h1 class="display-5 display-font mb-2">Who <span class="text-silver">We Are</span></h1>
        <p class="lead mb-0">A volunteer club with one mission: make Panther football the best experience in town.</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row gy-5">
          <div class="col-lg-6">
            <div class="section-kicker mb-2">Our mission</div>
            <h2 class="display-font h2 mb-3">For the players. For the program.</h2>
            <p class="text-muted">
              The Century Panther Touchdown Club is a volunteer organization of parents,
              alumni, and community members. We raise funds and rally volunteers so that coaches
              can coach and players can play — without worrying about what the budget covers.
            </p>
            <p class="text-muted">
              Everything we raise goes back into the program: safety equipment, team meals,
              senior scholarships, camps, spirit wear, and the traditions — homecoming,
              senior night, the season banquet — that players remember for the rest of their lives.
            </p>
            <a routerLink="/get-involved" class="btn btn-navy mt-2">
              <i class="fa-solid fa-user-plus me-2"></i>Become a member
            </a>
          </div>
          <div class="col-lg-6">
            <div class="card card-panther">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-3"><i class="fa-solid fa-users text-navy me-2"></i>Club board</h3>
                <p class="small text-muted">
                  The board is elected each spring at our annual meeting. Want to serve? Every
                  position is open to any member — no experience required, just Panther pride.
                </p>
                <ul class="list-group list-group-flush">
                  @for (member of board; track member.title) {
                    <li class="list-group-item d-flex align-items-center gap-3 px-0">
                      <div class="icon-badge flex-shrink-0"><i [class]="member.icon"></i></div>
                      <div>
                        <div class="fw-semibold">{{ member.name }} <span class="text-muted fw-normal">&middot; {{ member.title }}</span></div>
                        <div class="small text-muted">{{ member.text }}</div>
                      </div>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-panther-coal">
      <div class="container">
        <div class="text-center mb-4">
          <div class="section-kicker mb-2">Meetings</div>
          <h2 class="display-font h1">Every voice counts</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <p style="color: var(--panther-muted);">
              We meet the <strong class="text-silver">third Tuesday of every month at 7:00 PM</strong>
              in the RCHS Library. Meetings are open to everyone — members vote, but all
              Panther fans are welcome at the table.
            </p>
            <a routerLink="/contact" class="btn btn-outline-silver">
              <i class="fa-solid fa-envelope me-2"></i>Get meeting reminders
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  board = BOARD_MEMBERS;
}
