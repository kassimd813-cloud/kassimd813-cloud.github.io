import { Component } from '@angular/core';
import { MathBackdrop } from './components/math-backdrop/math-backdrop';
import { SiteNav } from './components/site-nav/site-nav';
import {
  APPROACH_STEPS,
  AWARDS,
  BODIES,
  EDUCATION,
  EMAIL,
  EXPERIENCE,
  HERO_STATS,
  HOBBIES,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SUBJECTS,
} from './data/portfolio';

@Component({
  selector: 'app-root',
  imports: [SiteNav, MathBackdrop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly email = EMAIL;
  readonly phoneDisplay = PHONE_DISPLAY;
  readonly phoneHref = PHONE_HREF;
  readonly nav = NAV_LINKS;
  readonly experience = EXPERIENCE;
  readonly subjects = SUBJECTS;
  readonly awards = AWARDS;
  readonly education = EDUCATION;
  readonly bodies = BODIES;
  readonly hobbies = HOBBIES;
  readonly approachSteps = APPROACH_STEPS;
  readonly heroStats = HERO_STATS;
  readonly roman = ['i', 'ii', 'iii'] as const;

  /** Parabola points for the hero diagram: y = 0.09x² − 3 */
  readonly parabolaPoints = (() => {
    return Array.from({ length: 41 }, (_, i) => {
      const x = -10 + i * 0.5;
      const y = 0.09 * x * x - 3;
      return `${200 + x * 16},${230 - y * 16}`;
    }).join(' ');
  })();

  readonly axisTicks = [-8, -4, 4, 8];
}
