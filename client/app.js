var app = angular.module('sparktc', ['ngRoute', 'ngResource', , 'ngAnimate','ui.bootstrap']);
app.config(function($routeProvider, $locationProvider, $httpProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/client/views/home.html',
    controller: 'HomeController'
  })
  .when('/partner',{
    templateUrl:'/client/views/partner.html',
    controller:'PartnerController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
