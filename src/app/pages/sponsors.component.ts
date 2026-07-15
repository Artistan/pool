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
            The Century Panther Touchdown Club is an official 501(c)(3) non-profit organization —
            opt in at checkout to receive a receipt for your contribution.
          </p>
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
