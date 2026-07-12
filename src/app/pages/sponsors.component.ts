import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SponsorsSupportersComponent } from '../components/sponsors-supporters.component';
import { BUSINESS_SPONSORS_ZEFFY_URL } from '../site-links';
import { CORPORATE_COMPARISON } from '../touchdown-club';

@Component({
  selector: 'app-sponsors',
  imports: [RouterLink, SponsorsSupportersComponent],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Sponsorship</div>
        <h1 class="display-5 display-font mb-2">Our <span class="text-silver">Sponsors</span></h1>
        <p class="lead mb-0">The businesses and supporters backing Panther football.</p>
      </div>
    </section>

    <!-- Sponsors & supporters first (shared with the Game Day Program page) -->
    <app-sponsors-supporters />

    <!-- Corporate package comparison -->
    <section class="py-5 bg-panther-silver">
      <div class="container">
        <div class="text-center mb-4">
          <div class="section-kicker mb-2">Compare packages</div>
          <h2 class="display-font h1">Corporate Sponsorship Benefits</h2>
          <p class="mx-auto" style="max-width: 42rem;">
            Every tier puts your brand in front of Panther Nation — here's what each
            level includes across the season.
          </p>
        </div>
        <div class="table-responsive">
          <table class="table table-schedule table-striped align-middle bg-white rounded overflow-hidden">
            <thead>
              <tr>
                <th scope="col">Benefit</th>
                <th scope="col">Platinum $4,000</th>
                <th scope="col">Gold $3,500</th>
                <th scope="col">Silver $2,500</th>
                <th scope="col">Bronze $1,500</th>
              </tr>
            </thead>
            <tbody>
              @for (row of comparison; track row.benefit) {
                <tr>
                  <td class="fw-semibold">{{ row.benefit }}</td>
                  <td>{{ row.platinum }}</td>
                  <td>{{ row.gold }}</td>
                  <td>{{ row.silver }}</td>
                  <td>{{ row.bronze }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <div class="text-center mt-4">
          <a [href]="businessZeffyUrl" target="_blank" rel="noopener" class="btn btn-navy btn-lg">
            <i class="fa-solid fa-handshake me-2"></i>Choose your package
          </a>
          <p class="small mt-3 mb-1">
            Want category exclusivity and premium activation?
            <a routerLink="/contact" class="fw-semibold">Ask about Panther Platinum Plus</a>.
          </p>
          <p class="small mb-0">
            The Century Panther Touchdown Club is an official 501(c) non-profit organization —
            opt in at checkout to receive a receipt for your contribution.
          </p>
        </div>
      </div>
    </section>

    <!-- Specialty & in-kind partnerships -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center gy-4">
          <div class="col-lg-6">
            <div class="section-kicker mb-2">Specialty partnerships</div>
            <h2 class="display-font h2 mb-3">Panther Fuel Partner</h2>
            <p class="text-muted">
              Not every sponsorship is a banner. Our Panther Fuel partnership keeps
              athletes fed and the community fired up — and it can be built from cash,
              in-kind product, or a mix that fits your business.
            </p>
            <ul class="list-unstyled">
              <li class="mb-2"><i class="fa-solid fa-fire text-navy me-2"></i>Home-game community tailgates</li>
              <li class="mb-2"><i class="fa-solid fa-utensils text-navy me-2"></i>Weekly pre-game team pasta feeds</li>
              <li class="mb-2"><i class="fa-solid fa-apple-whole text-navy me-2"></i>Healthy snack packs for away-game travel</li>
            </ul>
            <p class="small text-muted">
              Partners get logo placement, game-day announcements, social media shout-outs,
              and recognition in team communications all season long.
            </p>
            <a routerLink="/contact" class="btn btn-navy">
              <i class="fa-solid fa-envelope me-2"></i>Build a partnership with us
            </a>
          </div>
          <div class="col-lg-6">
            <div class="card card-panther">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-3"><i class="fa-solid fa-basket-shopping text-navy me-2"></i>Perfect for</h3>
                <p class="small text-muted mb-2">
                  Grocery stores, restaurants, and food suppliers who want repeat, meaningful
                  exposure across the whole season — from the tailgate lot to the team bus.
                </p>
                <p class="small text-muted mb-0">
                  Flexible scope: sponsor the full season or a single piece, with contributions
                  sized to your capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support the club -->
    <section class="py-5 bg-panther-coal">
      <div class="container text-center">
        <div class="section-kicker mb-2">Families, alumni & fans</div>
        <h2 class="display-font h1 mb-3">Want to support the team?</h2>
        <p class="mb-4 mx-auto" style="color: var(--panther-muted); max-width: 42rem;">
          Join the Touchdown Club, make a donation, or grab a volunteer shift —
          everything lives on our Get Involved page.
        </p>
        <div class="d-flex flex-wrap gap-2 justify-content-center">
          <a routerLink="/get-involved" class="btn btn-silver btn-lg">
            <i class="fa-solid fa-heart me-2"></i>Donate &amp; Get Involved
          </a>
          <a [href]="businessZeffyUrl" target="_blank" rel="noopener" class="btn btn-outline-silver btn-lg">
            <i class="fa-solid fa-handshake me-2"></i>Corporate sponsorships
          </a>
        </div>
      </div>
    </section>
  `,
})
export class SponsorsComponent {
  businessZeffyUrl = BUSINESS_SPONSORS_ZEFFY_URL;
  comparison = CORPORATE_COMPARISON;
}
