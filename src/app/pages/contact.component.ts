import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero-panther py-5">
      <div class="container hero-inner">
        <div class="section-kicker mb-2">Contact</div>
        <h1 class="display-5 display-font mb-2">Talk to <span class="text-gold">the Boosters</span></h1>
        <p class="lead mb-0">Questions, ideas, memberships, sponsorships — we answer them all.</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row gy-4">
          @for (channel of channels; track channel.title) {
            <div class="col-md-6 col-lg-3">
              <div class="card card-panther h-100 text-center">
                <div class="card-body p-4">
                  <div class="icon-badge mx-auto mb-3"><i [class]="channel.icon"></i></div>
                  <h2 class="h6 fw-bold text-uppercase">{{ channel.title }}</h2>
                  <p class="small text-muted mb-3">{{ channel.text }}</p>
                  <a class="btn btn-outline-gold btn-sm" [href]="channel.href">
                    {{ channel.cta }}
                  </a>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <div class="card card-panther">
              <div class="card-body p-4">
                <h2 class="h5 fw-bold mb-3"><i class="fa-solid fa-location-dot text-gold me-2"></i>Find us on game day</h2>
                <p class="small text-muted mb-2">
                  Look for the booster club tent at the home-side gate — memberships, spirit wear,
                  and volunteer sign-ups at every home game.
                </p>
                <p class="small text-muted mb-0">
                  Or join the monthly meeting: <strong>first Tuesday, 7:00 PM, school commons.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  // Replace these addresses/links with the club's real contact points.
  channels = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'General',
      text: 'Membership, meetings, and everything else.',
      cta: 'Email the club',
      href: 'mailto:boosters@centurypanthersfootball.org',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Sponsorship',
      text: 'Packets, tiers, and custom partnerships.',
      cta: 'Email sponsorship',
      href: 'mailto:sponsors@centurypanthersfootball.org',
    },
    {
      icon: 'fa-solid fa-clipboard-list',
      title: 'Volunteering',
      text: 'Concessions, meals, and game-day crews.',
      cta: 'Email volunteers',
      href: 'mailto:volunteer@centurypanthersfootball.org',
    },
    {
      icon: 'fa-brands fa-facebook',
      title: 'Social',
      text: 'Follow along for scores, photos, and news.',
      cta: 'Find us online',
      href: '#',
    },
  ];
}
