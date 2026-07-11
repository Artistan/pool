import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Sponsorship</div>
        <h1 class="display-5 display-font mb-2">Partner with <span class="text-gold">Panther Football</span></h1>
        <p class="lead mb-0">Put your business in front of thousands of Panther fans every Friday night.</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-kicker mb-2">Sponsorship tiers</div>
          <h2 class="display-font h1">Choose your impact</h2>
          <p class="text-muted mx-auto" style="max-width: 42rem;">
            Sponsorships fund equipment, team meals, and scholarships — and every tier comes with
            real visibility for your business in the Panther community.
          </p>
        </div>
        <div class="row gy-4 justify-content-center">
          @for (tier of tiers; track tier.name) {
            <div class="col-md-6 col-lg-4">
              <div class="card tier-card h-100" [class.tier-featured]="tier.featured">
                <div class="card-body p-4">
                  @if (tier.featured) {
                    <span class="badge badge-home text-uppercase mb-2">Best value</span>
                  }
                  <div class="d-flex align-items-center gap-3 mb-3">
                    <div class="icon-badge"><i [class]="tier.icon"></i></div>
                    <div>
                      <h3 class="h5 fw-bold display-font mb-0">{{ tier.name }}</h3>
                      <div class="fw-bold text-muted">\${{ tier.price }}/season</div>
                    </div>
                  </div>
                  <ul class="list-unstyled small">
                    @for (perk of tier.perks; track perk) {
                      <li class="mb-2"><i class="fa-solid fa-circle-check text-gold me-2"></i>{{ perk }}</li>
                    }
                  </ul>
                  <a routerLink="/contact" class="btn w-100" [class]="tier.featured ? 'btn-gold' : 'btn-outline-gold'">
                    Become a {{ tier.name }} sponsor
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="py-5 bg-panther-coal">
      <div class="container text-center">
        <div class="section-kicker mb-2">Our sponsors</div>
        <h2 class="display-font h1 mb-3">Businesses that back the Panthers</h2>
        <p class="mb-4" style="color: var(--panther-muted);">
          Sponsor logos and links will be featured here — and on game programs, banners, and social media.
          Your business could headline this section.
        </p>
        <div class="row justify-content-center gy-3 mb-4">
          @for (slot of [1, 2, 3, 4]; track slot) {
            <div class="col-6 col-md-3">
              <div class="border border-secondary rounded-3 py-4 d-flex align-items-center justify-content-center"
                   style="border-style: dashed !important; color: var(--panther-muted);">
                <i class="fa-solid fa-store me-2"></i>Your logo here
              </div>
            </div>
          }
        </div>
        <a routerLink="/contact" class="btn btn-gold btn-lg">
          <i class="fa-solid fa-handshake me-2"></i>Request a sponsorship packet
        </a>
      </div>
    </section>
  `,
})
export class SponsorsComponent {
  tiers = [
    {
      name: 'Black',
      price: 250,
      icon: 'fa-solid fa-medal',
      featured: false,
      perks: [
        'Business name on the season program',
        'Social media shout-out',
        'Sponsor certificate for your storefront',
      ],
    },
    {
      name: 'Gold',
      price: 750,
      icon: 'fa-solid fa-trophy',
      featured: true,
      perks: [
        'Everything in Black',
        'Banner displayed at all home games',
        'Logo + link on this website',
        'PA announcement every home game',
      ],
    },
    {
      name: 'Platinum Panther',
      price: 1500,
      icon: 'fa-solid fa-gem',
      featured: false,
      perks: [
        'Everything in Gold',
        'Premier banner placement at the stadium',
        'Featured sponsor of one home game',
        'Recognition at the season banquet',
      ],
    },
  ];
}
