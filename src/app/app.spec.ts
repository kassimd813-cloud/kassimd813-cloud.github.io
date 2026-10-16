import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the hero name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__title')?.textContent).toContain('Olutomi');
    expect(compiled.querySelector('.hero__title')?.textContent).toContain('Kassim');
  });

  it('should expose mailto and tel contact links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="mailto:kassimd813@gmail.com"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="tel:+27785678840"]')).toBeTruthy();
  });
});
