import { Component, computed, input } from '@angular/core';

export type MathBackdropVariant = 'hero' | 'experience' | 'approach' | 'contact';

@Component({
  selector: 'app-math-backdrop',
  templateUrl: './math-backdrop.html',
  styleUrl: './math-backdrop.css',
})
export class MathBackdrop {
  readonly variant = input.required<MathBackdropVariant>();

  readonly isDark = computed(
    () => this.variant() === 'experience' || this.variant() === 'contact',
  );

  readonly sinePath = (() => {
    const points = Array.from(
      { length: 61 },
      (_, i) => `L${i * 20} ${100 - Math.sin(i / 4.5) * 46}`,
    ).join(' ');
    return `M0 100 ${points}`;
  })();

  readonly experienceRadii = [60, 110, 160, 210];
  readonly experienceCurveYs = [4, 30, 92, 190];
  readonly experienceCurveXs = [60, 140, 220, 300];
  readonly fibonacci = [21, 34, 55, 89, 144, 233];
}
