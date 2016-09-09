'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view_aboutme when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view_aboutme");
  });


  describe('view_aboutme', function() {

    beforeEach(function() {
      browser.get('index.html#!/view_aboutme');
    });


    it('should render view_aboutme when user navigates to /view_aboutme', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view_gallery', function() {

    beforeEach(function() {
      browser.get('index.html#!/view_gallery');
    });


    it('should render view_gallery when user navigates to /view_gallery', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });


  describe('view_login', function() {

    beforeEach(function() {
      browser.get('index.html#!/view_login');
    });


    it('should render view_login when user navigates to /view_login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for view_login/);
    });

  });
});
