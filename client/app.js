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
  .when('/partner/apply',{
    templateUrl:'/client/views/applyPartner.html',
    controller:'ApplyPartnerController'
  })
  .when('/contact',{
    templateUrl:'client/views/contact.html',
    controller:'ContactController'
  })
  .when('/success',{
    templateUrl:'/client/views/success.html',
    controller:'SuccessController'
  })
  .when('/error',{
    templateUrl:'/client/views/error.html',
    controller:'ErrorController'
  })
  .otherwise({
    redirectTo: '/client/views/error.html'
  });
});
