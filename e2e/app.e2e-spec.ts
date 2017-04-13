import { NgxTodoDemoPage } from './app.po';

describe('ngx-todo-demo App', function() {
  let page: NgxTodoDemoPage;

  beforeEach(() => {
    page = new NgxTodoDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
