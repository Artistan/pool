import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DONATE_URL } from '../site-links';
import { TOUCHDOWN_CLUB_INTRO, TOUCHDOWN_CLUB_TIERS } from '../touchdown-club';

@Component({
  selector: 'app-get-involved',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Get Involved</div>
        <h1 class="display-5 display-font mb-2">Join the <span class="text-silver">Panther Family</span></h1>
        <p class="lead mb-0">Membership, volunteering, and every way to back the navy &amp; silver.</p>
      </div>
    </section>

    <!-- Touchdown Club support tiers -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-kicker mb-2">Touchdown Club</div>
          <h2 class="display-font h1">Panthers Community Support Tiers</h2>
          <p class="text-muted mx-auto" style="max-width: 46rem;">{{ touchdownClubIntro }}</p>
        </div>
        <div class="row gy-4 justify-content-center">
          @for (tier of tiers; track tier.name) {
            <div class="col-md-6 col-lg-3">
              <div class="card tier-card h-100 text-center">
                <div class="card-body p-4 d-flex flex-column">
                  <div class="icon-badge mx-auto mb-3"><i [class]="tier.icon"></i></div>
                  <h3 class="h5 fw-bold display-font">{{ tier.name }}</h3>
                  <div class="display-6 fw-bold my-2">\${{ tier.price }}</div>
                  <ul class="list-unstyled small text-start flex-grow-1">
                    @for (perk of tier.perks; track perk) {
                      <li class="mb-2"><i class="fa-solid fa-circle-check text-navy me-2"></i>{{ perk }}</li>
                    }
                  </ul>
                  <a [href]="donateUrl" target="_blank" rel="noopener" class="btn btn-navy w-100 mt-2">
                    Give \${{ tier.price }} on PayPal
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
        <p class="small text-muted text-center mt-4 mb-0">
          After giving, <a routerLink="/contact">send us your name and tier</a> so we can get your
          recognition, gear, and tickets headed your way.
        </p>
      </div>
    </section>

    <!-- Volunteer roles -->
    <section class="py-5 bg-panther-coal">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-kicker mb-2">Volunteer</div>
          <h2 class="display-font h1">Many hands, light work</h2>
          <p style="color: var(--panther-muted);">A couple hours a season makes a real difference. No experience needed — we'll show you the ropes.</p>
        </div>
        <div class="row gy-4">
          @for (role of volunteerRoles; track role.title) {
            <div class="col-md-6 col-lg-4">
              <div class="card card-panther bg-panther-dark h-100">
                <div class="card-body">
                  <div class="icon-badge mb-3"><i [class]="role.icon"></i></div>
                  <h3 class="h5 fw-bold">{{ role.title }}</h3>
                  <p class="small mb-0" style="color: var(--panther-muted);">{{ role.text }}</p>
                </div>
              </div>
            </div>
          }
        </div>
        <div class="text-center mt-5">
          <a routerLink="/contact" class="btn btn-silver btn-lg">
            <i class="fa-solid fa-clipboard-list me-2"></i>Sign up to volunteer
          </a>
        </div>
      </div>
    </section>

    <!-- Donate -->
    <section class="py-5">
      <div class="container text-center">
        <div class="section-kicker mb-2">Prefer to give directly?</div>
        <h2 class="display-font h1 mb-3">Donate to the club</h2>
        <p class="text-muted mx-auto mb-4" style="max-width: 40rem;">
          No time for shifts or meetings? A one-time donation through PayPal goes straight
          to equipment, team meals, and scholarships for Panther players.
        </p>
        <a [href]="donateUrl" target="_blank" rel="noopener" class="btn btn-navy btn-lg">
          <i class="fa-solid fa-heart me-2"></i>Donate with PayPal
        </a>
      </div>
    </section>
  `,
})
export class GetInvolvedComponent {
  donateUrl = DONATE_URL;
  touchdownClubIntro = TOUCHDOWN_CLUB_INTRO;
  tiers = TOUCHDOWN_CLUB_TIERS;

  volunteerRoles = [
    {
      icon: 'fa-solid fa-burger',
      title: 'Concessions crew',
      text: 'Grill, pour, and serve at home games. The best view in the stadium, minus the seat.',
    },
    {
      icon: 'fa-solid fa-utensils',
      title: 'Team meal squad',
      text: 'Help plan, cook, or host weekly pre-game team meals for 100+ hungry Panthers.',
    },
    {
      icon: 'fa-solid fa-link',
      title: 'Chain gang & game ops',
      text: 'Work the sidelines, run the clock, or staff the gate on Friday nights.',
    },
    {
      icon: 'fa-solid fa-shirt',
      title: 'Spirit wear table',
      text: 'Sell Panther gear at games and school events. Cash box provided, sales pitch optional.',
    },
    {
      icon: 'fa-solid fa-camera',
      title: 'Media & photos',
      text: 'Shoot game photos or clip film highlights for players, families, and recruiting.',
    },
    {
      icon: 'fa-solid fa-truck',
      title: 'Logistics & setup',
      text: 'Haul equipment, set up for events, and tear down after. Trucks and muscles welcome.',
    },
  ];
}
