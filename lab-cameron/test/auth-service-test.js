'use strict';

const expect = require('chai').expect;

describe('Auth Service', function() {
  beforeEach(done => {
    angular.mock.module('slugram');
    angular.mock.inject(($httpBackEnd, $window, $rootScope, authService) => {
      this.$httpBackEnd = $httpBackEnd;
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      done();
    });
  });

  describe('authService.getToken()', () => {
    it('should return a tokin\'', done => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');
      this.authService.getToken()
      .then(token => {
        expect(token).to.equal(this.$window.localStorage.token);
        expect(token).to.equal('test token');
      })
      .catch(err => {
        expect(err).to.equal(null);
      });
      done();
    });
  });
});
