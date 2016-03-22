var app = angular.module('sparktc');

app.controller('NavBarController', function($scope, $location, anchorSmoothScroll) {

  $scope.gotoElement = function (eID){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('bottom');

    // call $anchorScroll()
    anchorSmoothScroll.scrollTo(eID);

  };
});

app.controller('HomeController', function($scope, $location, anchorSmoothScroll, resources, partners, partnerTypes, $timeout,aboutContent){
  $scope.resources = resources;
  $scope.partners = partners;
  $scope.partnerTypes = partnerTypes;

  $scope.content = {};
  $scope.content.about = aboutContent;
});

app.controller('PartnerController', function($scope){

});
