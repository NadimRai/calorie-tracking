import { CalorieTrackerAccelhkPage } from './app.po';

describe('calorie-tracker-accelhk App', function() {
  let page: CalorieTrackerAccelhkPage;

  beforeEach(() => {
    page = new CalorieTrackerAccelhkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
