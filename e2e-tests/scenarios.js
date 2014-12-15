'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /master when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/master");
  });


  describe('master', function() {

    beforeEach(function() {
      browser.get('index.html#/master');
    });


    it('should render master when user navigates to /master', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('roomDetail', function() {

    beforeEach(function() {
      browser.get('index.html#/roomDetail');
    });


    it('should render roomDetail when user navigates to /roomDetail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
