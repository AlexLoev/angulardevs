'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function () {
  var args = arguments;
  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(100);   // here we can adjust the execution speed
  });
  return origFn.apply(browser.driver.controlFlow(), args);
  // console.log('something');
};

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
    //beforeEach(origFn);
    beforeAll(function() {
      browser.get('index.html#!/myaccount');
    });
    it('should have form', function() {
      expect(element(by.name('myaccountForm')).isPresent()).toBe(true);
    });
    it('should disable submit button cause of required fields', function() {
      expect(element(by.name('myaccountSubmit')).isEnabled()).toBe(false);
    });
    it('fill the controls', function() {
      var username = element(by.name('username'));
      expect(username.isPresent()).toBe(true);
      username.sendKeys('test user');
      var useremail = element(by.name('useremail'));
      expect(useremail.isPresent()).toBe(true);
      useremail.sendKeys('test@test.com');
    });
    it('should enabled submit button cause of filling required fields', function() {
      expect(element(by.name('myaccountSubmit')).isEnabled()).toBe(true);
    });

  });
  
  describe('showlist add pokemon to cart', {
    
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
