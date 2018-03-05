angular.module('app', [
  'ui.router',
  require('./game').name,

])
.config(function($urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/game');
})
