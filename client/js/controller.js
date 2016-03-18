var app = angular.module('sparktc');

app.controller('HomeController', function($scope){
});

app.controller('CarouselDemoCtrl',function($scope, carsoulSlides){
  $scope.myInterval = 3000;
  $scope.slides = carsoulSlides;
});


app.controller('NavBarController', function($scope, $location, anchorSmoothScroll, resources) {
  $scope.resources = resources;
  $scope.outOfmenuItem = true;
  $scope.outOfHidden = true;
  $scope.hidden = $scope.outOfmenuItem && $scope.outOfHidden;


  $scope.enterDropDownMenuItem = function(){
    //  $scope.hidden = false;
     $scope.outOfmenuItem = false;
     $scope.hidden = $scope.outOfmenuItem && $scope.outOfHidden;

  }
  $scope.leftDropDownMenuItem = function(){
    $scope.outOfmenuItem = true;
    $scope.hidden = $scope.outOfmenuItem && $scope.outOfHidden;

  }
  $scope.enterHiddenMenu = function(){
    $scope.outOfHidden = false;
    $scope.hidden = $scope.outOfmenuItem && $scope.outOfHidden;
  }
  $scope.leftHiddenMenu = function(){
    $scope.outOfHidden = true;
    $scope.hidden = $scope.outOfmenuItem && $scope.outOfHidden;

  }

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
