angular.module('memoryGame', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'features/home/homeTmpl.html',
      controller: 'homeCtrl'
    })

    .state('game', {
      url: '/pony-game',
      templateUrl: 'features/game/ponyGameTmpl.html',
      controller: 'gameCtrl'
    });


  $urlRouterProvider
    .otherwise('/');

});