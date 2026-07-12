import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Sponsorship</div>
        <h1 class="display-5 display-font mb-2">Our <span class="text-silver">Sponsors</span></h1>
        <p class="lead mb-0">The businesses and partners backing Panther football.</p>
      </div>
    </section>

    <!-- Sponsors first -->
    <section class="py-5">
      <div class="container text-center">
        <div class="section-kicker mb-2">Thank you, sponsors</div>
        <h2 class="display-font h1 mb-3">Proudly backing the Panthers</h2>
        <p class="text-muted mx-auto mb-4" style="max-width: 42rem;">
          Sponsor logos and links are featured here — and on game programs, stadium banners,
          and social media. Your business could headline this section.
        </p>
        <div class="row justify-content-center gy-3 mb-4">
          @for (slot of [1, 2, 3, 4]; track slot) {
            <div class="col-6 col-md-3">
              <div class="border rounded-3 py-4 d-flex align-items-center justify-content-center"
                   style="border-style: dashed !important; color: var(--panther-steel);">
                <i class="fa-solid fa-store me-2"></i>Your logo here
              </div>
            </div>
          }
        </div>
        <a routerLink="/contact" class="btn btn-navy btn-lg">
          <i class="fa-solid fa-handshake me-2"></i>Request a sponsorship packet
        </a>
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
        <a routerLink="/get-involved" class="btn btn-silver btn-lg">
          <i class="fa-solid fa-heart me-2"></i>Donate &amp; Get Involved
        </a>
      </div>
    </section>
  `,
})
export class SponsorsComponent {}
