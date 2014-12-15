'use strict';

describe('myApp.master module', function() {

  beforeEach(module('myApp.master'));

  describe('master controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});