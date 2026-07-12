import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="hero-panther py-5">
      <div class="container hero-inner py-lg-5">
        <div class="row align-items-center gy-4">
          <div class="col-lg-7">
            <div class="section-kicker mb-2">Century Panther Touchdown Club</div>
            <h1 class="display-4 display-font mb-3">
              Friday nights are <span class="text-silver">better together.</span>
            </h1>
            <p class="lead mb-4" style="max-width: 34rem;">
              We're the parents, alumni, and fans behind Panther football — funding equipment,
              feeding players, cheering loudest, and building a program every kid is proud to play for.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a routerLink="/get-involved" class="btn btn-silver btn-lg">
                <i class="fa-solid fa-user-plus me-2"></i>Join the Club
              </a>
              <a routerLink="/schedule" class="btn btn-outline-silver btn-lg">
                <i class="fa-solid fa-calendar-days me-2"></i>Season Schedule
              </a>
            </div>
          </div>
          <div class="col-lg-5 text-center">
            <img src="panther-logo.png" alt="Century Panther Touchdown Club logo" class="hero-logo">
            <div class="display-font h4 mt-3 mb-0">Century <span class="text-silver">Panther</span> Touchdown Club</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact stats -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center gy-4">
          @for (stat of stats; track stat.label) {
            <div class="col-6 col-lg-3">
              <div class="stat-number">{{ stat.value }}</div>
              <div class="text-uppercase small fw-semibold text-muted mt-1">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Donate band -->
    <section class="py-4 bg-panther-dark">
      <div class="container">
        <div class="row align-items-center gy-3 text-center text-lg-start">
          <div class="col-lg-9">
            <h2 class="h4 display-font mb-1">Every dollar goes <span class="text-silver">back to the program</span></h2>
            <p class="small mb-0" style="color: var(--panther-muted);">
              Equipment, team meals, and scholarships — every gift goes straight to the team.
            </p>
          </div>
          <div class="col-lg-3 text-lg-end">
            <a routerLink="/get-involved" class="btn btn-silver btn-lg">
              <i class="fa-solid fa-heart me-2"></i>Donate
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What we do -->
    <section class="py-5 bg-panther-coal">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-kicker mb-2">What we do</div>
          <h2 class="display-font h1">Powering the program</h2>
        </div>
        <div class="row gy-4">
          @for (item of pillars; track item.title) {
            <div class="col-md-6 col-lg-3">
              <div class="card card-panther h-100 bg-panther-dark">
                <div class="card-body">
                  <div class="icon-badge mb-3"><i [class]="item.icon"></i></div>
                  <h3 class="h5 fw-bold">{{ item.title }}</h3>
                  <p class="small mb-0" style="color: var(--panther-muted);">{{ item.text }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Get involved CTA -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center gy-4">
          <div class="col-lg-6">
            <div class="section-kicker mb-2">Get involved</div>
            <h2 class="display-font h1 mb-3">It takes a Panther village</h2>
            <p class="text-muted">
              Every volunteer shift, every team dinner, every sponsorship dollar goes
              straight back to our players and coaches. However you can help, there's a spot for you.
            </p>
            <ul class="list-unstyled">
              <li class="mb-2"><i class="fa-solid fa-circle-check text-navy me-2"></i>Join the Touchdown Club — support tiers start at $50</li>
              <li class="mb-2"><i class="fa-solid fa-circle-check text-navy me-2"></i>Volunteer for team meals, spirit wear, and game-day operations</li>
              <li class="mb-2"><i class="fa-solid fa-circle-check text-navy me-2"></i>Sponsor the program through your business</li>
            </ul>
            <a routerLink="/get-involved" class="btn btn-navy mt-2">
              <i class="fa-solid fa-hands-helping me-2"></i>See how to help
            </a>
          </div>
          <div class="col-lg-6">
            <div class="card card-panther">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-3"><i class="fa-solid fa-bullhorn text-navy me-2"></i>Club announcements</h3>
                @for (note of announcements; track note.title) {
                  <div class="d-flex gap-3 mb-3">
                    <div class="icon-badge flex-shrink-0"><i [class]="note.icon"></i></div>
                    <div>
                      <div class="fw-semibold">{{ note.title }}</div>
                      <div class="small text-muted">{{ note.text }}</div>
                    </div>
                  </div>
                }
                <a routerLink="/contact" class="small fw-semibold">Questions? Contact the board →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  stats = [
    { value: '100+', label: 'Players supported' },
    { value: '50+', label: 'Volunteer families' },
    { value: '9', label: 'Games cheered' },
    { value: '100%', label: 'Back to the program' },
  ];

  pillars = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Equipment & Safety',
      text: 'Helmets, pads, and training gear that keep our athletes safe and competitive.',
    },
    {
      icon: 'fa-solid fa-utensils',
      title: 'Team Meals',
      text: 'Pre-game meals and post-practice fuel for every player, every week.',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarships',
      text: 'Senior scholarships and camp fees so cost never keeps a kid off the field.',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Panther Spirit',
      text: 'Spirit wear, senior night, banquets, and the traditions that make a program.',
    },
  ];

  announcements = [
    {
      icon: 'fa-solid fa-calendar-check',
      title: 'Monthly club meeting',
      text: 'Third Tuesday of each month, 7:00 PM in the RCHS Library — everyone welcome.',
    },
    {
      icon: 'fa-solid fa-shirt',
      title: 'Spirit wear store open',
      text: 'New Panther gear drops for the season — order through the club at any home game.',
    },
    {
      icon: 'fa-solid fa-clipboard-list',
      title: 'Game-day volunteers needed',
      text: 'Spirit wear table and game-ops crews for every home game. Sign up on the Get Involved page.',
    },
  ];
}
