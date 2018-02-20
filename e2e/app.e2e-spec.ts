import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('alfrescofav App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Favourites');
  });
  it('should contain favourites as cards', () => {
    page.navigateTo();
      const myElement = element(by.css('mat-card'));
      expect(myElement.isPresent()).toBe(true);
  });
  it('should contain a title inside the cards', () => {
    page.navigateTo();
      const myElement = element(by.css('mat-card span'));
      expect(myElement.getText()).not.toBe('');
  });
  it('should contain a icon inside the cards', () => {
    page.navigateTo();
      const myElement = element(by.css('mat-card i'));
      expect(myElement.isPresent()).toBe(true);
  });
});
