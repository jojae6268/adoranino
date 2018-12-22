import { AdoraninoPage } from './app.po';

describe('adoranino App', function() {
  let page: AdoraninoPage;

  beforeEach(() => {
    page = new AdoraninoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
