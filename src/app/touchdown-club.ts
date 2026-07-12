/**
 * Century Panther Touchdown Club — Panthers Community Support Tiers,
 * from the club's official sponsorship flyer. Shown on the Get Involved
 * and Sponsors pages.
 */
export interface SupportTier {
  name: string;
  price: number;
  icon: string;
  perks: string[];
}

export const TOUCHDOWN_CLUB_INTRO =
  'The Century Panther Touchdown Club is happy to introduce our new Panthers ' +
  'Community Support Tiers. This program allows families, alumni, and community ' +
  "members to directly support the team's needs.";

export const TOUCHDOWN_CLUB_TIERS: SupportTier[] = [
  {
    name: 'Home Field Supporter',
    price: 50,
    icon: 'fa-solid fa-house-flag',
    perks: [
      'Panther Decal',
      'Digital recognition on website',
      'Personalized thank-you note',
    ],
  },
  {
    name: 'Prowl Backer',
    price: 150,
    icon: 'fa-solid fa-paw',
    perks: [
      'Includes $50 tier benefits, plus:',
      'Name in Game Day Program',
      'Two Century Panther water bottles',
    ],
  },
  {
    name: 'Century Champion',
    price: 250,
    icon: 'fa-solid fa-trophy',
    perks: [
      'All assets from lower tiers',
      'Receive 2 Century Football hoodies',
      'Name listed in a larger font/section in the Game Day Program',
      'Receive 2 season tickets for the 2026 Home games',
    ],
  },
  {
    name: 'Legacy Builder',
    price: 400,
    icon: 'fa-solid fa-crown',
    perks: [
      'All assets from lower tiers',
      'Receive 2 Custom Stadium Seats branded as Century Panther Legacy Builder',
      '2 Season Tickets to all Home Games in the 2026 Season and reserved VIP Parking',
    ],
  },
];
