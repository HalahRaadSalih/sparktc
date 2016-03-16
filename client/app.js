var app = angular.module('sparktc', ['ngRoute', 'ngResource', , 'ngAnimate']);
app.config(function($routeProvider, $locationProvider, $httpProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/client/views/home.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
