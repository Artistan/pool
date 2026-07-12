/**
 * Game Day Program content — everything on the /program page is driven from
 * this file so it can be updated each week without touching page markup.
 *
 * PLACEHOLDER DATA: the roster, coaching staff, game info, and supporter
 * lists below are sample entries. Replace them with the real 2026 season
 * details as they're finalized.
 */

export interface GameInfo {
  opponent: string;
  date: string;
  kickoff: string;
  location: string;
  theme: string;
}

export interface GameEvent {
  icon: string;
  title: string;
  text: string;
}

export interface Coach {
  name: string;
  role: string;
}

export interface Player {
  number: number | string;
  name: string;
  position: string;
  grade: string;
}

/** Set to true once the real roster/staff below has been filled in. */
export const PROGRAM_DATA_IS_PLACEHOLDER = true;

export const GAME_INFO: GameInfo = {
  opponent: 'TBA — Season Opener',
  date: 'Fall 2026',
  kickoff: '7:00 PM',
  location: 'Century High School Stadium',
  theme: 'Theme night TBA',
};

export const GAME_EVENTS: GameEvent[] = [
  {
    icon: 'fa-solid fa-fire',
    title: 'Pregame tailgate',
    text: 'Join the Touchdown Club tent at the home-side gate starting 90 minutes before kickoff.',
  },
  {
    icon: 'fa-solid fa-music',
    title: 'Halftime show',
    text: 'Performance by the Century bands and spirit squads.',
  },
  {
    icon: 'fa-solid fa-shirt',
    title: 'Spirit wear table',
    text: 'New Panther gear on sale all game at the Touchdown Club tent.',
  },
];

export const COACHES: Coach[] = [
  { name: 'Coach name', role: 'Head Coach' },
  { name: 'Coach name', role: 'Offensive Coordinator' },
  { name: 'Coach name', role: 'Defensive Coordinator' },
  { name: 'Coach name', role: 'Special Teams' },
  { name: 'Coach name', role: 'Line Coach' },
];

export const ROSTER: Player[] = [
  { number: 1, name: 'Player name', position: 'QB', grade: 'Sr.' },
  { number: 2, name: 'Player name', position: 'RB', grade: 'Jr.' },
  { number: 3, name: 'Player name', position: 'WR', grade: 'Sr.' },
  { number: 4, name: 'Player name', position: 'WR', grade: 'So.' },
  { number: 5, name: 'Player name', position: 'TE', grade: 'Jr.' },
  { number: 50, name: 'Player name', position: 'OL', grade: 'Sr.' },
  { number: 55, name: 'Player name', position: 'DL', grade: 'Jr.' },
  { number: 40, name: 'Player name', position: 'LB', grade: 'Sr.' },
  { number: 20, name: 'Player name', position: 'DB', grade: 'So.' },
  { number: 90, name: 'Player name', position: 'K/P', grade: 'Jr.' },
];

/*
 * Sponsor and supporter recognition is rendered by the shared
 * SponsorsSupportersComponent (src/app/components/sponsors-supporters.component.ts).
 */
