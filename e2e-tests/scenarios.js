'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {
  describe('should highlighted btn-primary depends of routes', function() {
    it('highlighted "Список"', function() {
      browser.get('index.html#!/list');
      expect(element.all(by.css('.btn-primary')).first().getText())
      .toMatch('Список');
    });
    it('highlighted "Добавить нового"', function() {
      browser.get('index.html#!/new');
      expect(element.all(by.css('.btn-primary')).first().getText())
      .toMatch('Добавить нового');
    });
    it('highlighted "Личный кабинет"', function() {
      browser.get('index.html#!/myaccount');
      expect(element.all(by.css('.btn-primary')).first().getText())
      .toMatch('Личный кабинет');
    });
  });

  describe('page /myaccount', function() {
    before(function() {
      browser.get('index.html#!/myaccount');
    });
    it('should have form', function() {
      expect(element(by.name('myaccountForm')).isPresent()).toBe(true);
    });
    it('should have required fields', function() {
      expect(element(by.name('myaccountSubmit')).isEnabled()).toBe(false);
    });
  });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#!/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch('/partial for view 2/');
  //   });

  // });
});
