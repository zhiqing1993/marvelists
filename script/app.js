'use strict'

var marvelApp = angular.module('marvelApp', ['ngResource', 'ngRoute', 'marvelApp.controllers', 'marvelApp.services']);

marvelApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/characters',    { templateUrl: '/marvelists/view/characters.html', controller: 'CharactersListCtrl' });
  $routeProvider.when('/character/:id', { templateUrl: '/marvelists/view/character.html',  controller: 'CharacterCtrl' });  
  $routeProvider.when('/comics/:id', { templateUrl: '/marvelists/view/comic.html',  controller: 'ComicCtrl' });  
}]);

marvelApp.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}]);


var marvelAppControllers = angular.module('marvelApp.controllers', []);
var marvelAppServices = angular.module('marvelApp.services', ['ngResource']);