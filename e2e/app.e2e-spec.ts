import { LuisPage } from './app.po';

describe('luis App', () => {
  let page: LuisPage;

  beforeEach(() => {
    page = new LuisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
