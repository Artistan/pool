import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-involved',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Get Involved</div>
        <h1 class="display-5 display-font mb-2">Join the <span class="text-gold">Panther Family</span></h1>
        <p class="lead mb-0">Membership, volunteering, and every way to back the black &amp; gold.</p>
      </div>
    </section>

    <!-- Membership tiers -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-kicker mb-2">Annual membership</div>
          <h2 class="display-font h1">Pick your level</h2>
          <p class="text-muted">Every membership includes voting rights at club meetings and our undying gratitude.</p>
        </div>
        <div class="row gy-4 justify-content-center">
          @for (tier of tiers; track tier.name) {
            <div class="col-md-6 col-lg-4">
              <div class="card tier-card h-100 text-center" [class.tier-featured]="tier.featured">
                <div class="card-body p-4">
                  @if (tier.featured) {
                    <span class="badge badge-home text-uppercase mb-2">Most popular</span>
                  }
                  <div class="icon-badge mx-auto mb-3"><i [class]="tier.icon"></i></div>
                  <h3 class="h4 fw-bold display-font">{{ tier.name }}</h3>
                  <div class="display-6 fw-bold my-2">\${{ tier.price }}</div>
                  <div class="small text-muted mb-3">per season</div>
                  <ul class="list-unstyled small text-start">
                    @for (perk of tier.perks; track perk) {
                      <li class="mb-2"><i class="fa-solid fa-circle-check text-gold me-2"></i>{{ perk }}</li>
                    }
                  </ul>
                  <a routerLink="/contact" class="btn w-100 mt-2" [class]="tier.featured ? 'btn-gold' : 'btn-outline-gold'">
                    Join as {{ tier.name }}
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
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
          <a routerLink="/contact" class="btn btn-gold btn-lg">
            <i class="fa-solid fa-clipboard-list me-2"></i>Sign up to volunteer
          </a>
        </div>
      </div>
    </section>
  `,
})
export class GetInvolvedComponent {
  tiers = [
    {
      name: 'Fan',
      price: 25,
      icon: 'fa-solid fa-hands-clapping',
      featured: false,
      perks: [
        'Club membership & voting rights',
        'Booster club window decal',
        'Email newsletter all season',
      ],
    },
    {
      name: 'Family',
      price: 60,
      icon: 'fa-solid fa-people-roof',
      featured: true,
      perks: [
        'Everything in Fan — for the whole household',
        'Two Panther spirit wear items',
        'Reserved booster seating at Senior Night',
        'Discounted banquet tickets',
      ],
    },
    {
      name: 'Legend',
      price: 150,
      icon: 'fa-solid fa-crown',
      featured: false,
      perks: [
        'Everything in Family',
        'Name listed on the season program',
        'Legend recognition at homecoming',
        'First pick of volunteer shifts (yes, really)',
      ],
    },
  ];

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
