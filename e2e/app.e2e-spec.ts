import { AutionPage } from './app.po';

describe('aution App', () => {
  let page: AutionPage;

  beforeEach(() => {
    page = new AutionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
