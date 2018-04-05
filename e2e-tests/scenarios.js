'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
/**функция притормаживания для protractor, чтобы можно было смотреть процесс тестирования в браузере */
var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function () {
  var args = arguments;
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(80); 
  });
  return origFn.apply(browser.driver.controlFlow(), args);
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
    beforeAll(function() {
      browser.get('index.html#!/myaccount');
    });
    it('should have form', function() {
      expect(element(by.name('myaccountForm')).isPresent()).toBe(true);
    });
    it('should disable submit button cause of required fields', function() {
      expect(element(by.name('myaccountSubmit')).isEnabled()).toBe(false);
    });
    describe('check required fields', function() {
      beforeAll(function() {
        var username = element(by.name('username'));
        var useremail = element(by.name('useremail'));
        username.sendKeys('test user');
        useremail.sendKeys('test@test.com');
      });
  
      it('should enabled submit button cause required fields was filling before', function() {
        expect(element(by.name('myaccountSubmit')).isEnabled()).toBe(true);
      });
    });
  });
  
  

  describe('page /list', function() {
    var pokemons = [];
    const pokemonscount = 835;
    beforeAll(function() {
      browser.get('index.html#!/list');
      pokemons = element.all(by.repeater('vm.pokemons'));
    });
    it(`should have list of ${pokemonscount} pokemons`, function() {
      expect(pokemons.count()).toBe(pokemonscount);
    });
    it('should add first pokemon to shoping cart', function() {
      pokemons.first().element(by.buttonText('Add')).click();
      var cartItems = element.all(by.repeater('$ctrl.cartItems'));
      expect(cartItems.count()).toBeGreaterThan(0);
    });
  });
});
