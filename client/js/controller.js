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

app.controller('FooterController', function($scope){
  $scope.index = {};
  $scope.index.footer = "Apache®, Apache Spark™, and Spark™ are trademarks of the Apache Software Foundation in the United States and/or other countries.";
});

app.controller('HomeController', function($scope, $location, anchorSmoothScroll, resources, partners, partnerTypes, $timeout,aboutContent){
  $scope.resources = resources;
  $scope.partners = partners;
  $scope.partnerTypes = partnerTypes;

  $scope.content = aboutContent;
  $scope.content.about = aboutContent.description;
  $scope.content.title = aboutContent.title;
});

app.controller('PartnerController', function($scope, partnerBenefits){
  $scope.benefits = partnerBenefits;
});

app.controller('ApplyPartnerController', function($scope, partnerBenefits, $http){
  $scope.benefits = partnerBenefits;

$scope.submit = function(partner){
      console.log(partner);

      var req = {
       method: 'POST',
       url: '/api/email',

       data: partner
      }

    $http(req).then(function(){
      console.log('over');
    });
    }
});

app.controller('ContactController', function(){

});

app.controller('SuccessController', function(){

});
