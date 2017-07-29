import { Component101Page } from './app.po';

describe('component101 App', () => {
  let page: Component101Page;

  beforeEach(() => {
    page = new Component101Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
