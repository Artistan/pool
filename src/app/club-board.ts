/**
 * Century Panther Touchdown Club board — displayed on the About page.
 * Update here when officers change.
 */
export interface BoardMember {
  name: string;
  title: string;
  icon: string;
  text: string;
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Lyn Peterson',
    title: 'President',
    icon: 'fa-solid fa-star',
    text: 'Runs meetings and coordinates with coaches and the athletic department.',
  },
  {
    name: 'Heidi Elliott',
    title: 'Vice President',
    icon: 'fa-solid fa-star-half-stroke',
    text: 'Leads fundraising campaigns and sponsor relationships.',
  },
  {
    name: 'Elizabeth Rice',
    title: 'Treasurer',
    icon: 'fa-solid fa-coins',
    text: 'Manages the budget and reports finances at every meeting.',
  },
  {
    name: 'Christie Bauer',
    title: 'Secretary',
    icon: 'fa-solid fa-pen-nib',
    text: 'Keeps minutes, memberships, and communications flowing.',
  },
];
