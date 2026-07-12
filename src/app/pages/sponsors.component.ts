import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOUCHDOWN_CLUB_ZEFFY_URL } from '../site-links';
import { TOUCHDOWN_CLUB_INTRO, TOUCHDOWN_CLUB_TIERS } from '../touchdown-club';

@Component({
  selector: 'app-sponsors',
  imports: [RouterLink],
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Sponsorship</div>
        <h1 class="display-5 display-font mb-2">Partner with <span class="text-silver">Panther Football</span></h1>
        <p class="lead mb-0">Back the team through the Touchdown Club — or build a custom business sponsorship.</p>
      </div>
    </section>

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
                  <a [href]="zeffyUrl" target="_blank" rel="noopener" class="btn btn-navy w-100 mt-2">
                    Join for \${{ tier.price }}
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
        <p class="small text-muted text-center mt-4 mb-0">
          Tier checkout runs through Zeffy, our secure fundraising platform.
          Questions? <a routerLink="/contact">Contact the club</a>.
        </p>
      </div>
    </section>

    <section class="py-5 bg-panther-coal">
      <div class="container text-center">
        <div class="section-kicker mb-2">Business sponsors</div>
        <h2 class="display-font h1 mb-3">Put your business in front of Panther fans</h2>
        <p class="mb-4 mx-auto" style="color: var(--panther-muted); max-width: 42rem;">
          Banners at the stadium, game-day program ads, PA shout-outs, and featured-sponsor
          nights — we'll build a package that fits your business. Sponsor logos and links
          will be featured right here.
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
        <a routerLink="/contact" class="btn btn-silver btn-lg">
          <i class="fa-solid fa-handshake me-2"></i>Request a sponsorship packet
        </a>
      </div>
    </section>
  `,
})
export class SponsorsComponent {
  zeffyUrl = TOUCHDOWN_CLUB_ZEFFY_URL;
  touchdownClubIntro = TOUCHDOWN_CLUB_INTRO;
  tiers = TOUCHDOWN_CLUB_TIERS;
}
