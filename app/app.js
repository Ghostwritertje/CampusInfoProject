'use strict';

// Declare app level module which depends on views, and components
var campusInfoApp = angular.module('campusInfo', [
  'ngRoute',
  'ngAnimate',
  'campusInfoControllers',
  'campusInfoServices',
  'campusInfo.version'
]);
var campusInfoControllers = angular.module('campusInfoControllers', ['ngAnimate']);
var campusInfoServices = angular.module('campusInfoServices', []);



campusInfoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/master', {
    templateUrl: 'master/master.html',
    controller: 'MasterController'
  }).when('/roomDetail/:roomName', {
    templateUrl: 'roomDetail/roomDetail.html',
    controller: 'RoomDetailController'
  }).otherwise({redirectTo: '/master'});

}]);
