import { RechargeCardPage } from './app.po';

describe('recharge-card App', function() {
  let page: RechargeCardPage;

  beforeEach(() => {
    page = new RechargeCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
