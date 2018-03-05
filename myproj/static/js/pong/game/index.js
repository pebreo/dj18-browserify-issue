
angular.module('app.game', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
    .state('game', {
      url: '/game',
      template: '<div>\
        <div phaser-canvas></div>\
      </div>',

    })
})

.directive('phaserCanvas', function($window, $injector) {

  var linkFn = function(scope, ele, attrs) {
      var gameProperties = {
          screenWidth: 640,
          screenHeight: 480,
      };

      var mainState = function(game){};
      mainState.prototype = {
          preload: function () {

          },

          create: function () {

          },

          update: function () {

          },
      };

      var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'game-canvas');
      game.state.add('main', mainState);
      game.state.start('main');


  };

  return {
    scope: {
      ngModel: '=',
      mapId: '='
    },
    template: '<div id="game-canvas"></div>',
    compile: function(iEle, iAttrs) {
      return linkFn;
    }
  }
})
