var app = angular.module('sparktc');

app.controller('HomeController', function($scope){
});

app.controller('CarouselDemoCtrl',function($scope, carsoulSlides){
  $scope.myInterval = 500;
  $scope.slides = carsoulSlides;
});


app.controller('NavBarController', function($scope, $location, anchorSmoothScroll, resources, partners, partnerTypes) {
  $scope.resources = resources;
  $scope.partners = partners;
  $scope.partnerTypes = partnerTypes;
  
  $scope.gotoElement = function (eID){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('bottom');

    // call $anchorScroll()
    anchorSmoothScroll.scrollTo(eID);

  };
});

app.controller('AboutController', function($scope, aboutContent){
  $scope.content = {};
  $scope.content.about = aboutContent;
});
