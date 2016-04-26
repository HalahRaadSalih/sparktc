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
  // set footer text
  $scope.index.footer = "Apache®, Apache Spark™, and Spark™ are trademarks of the Apache Software Foundation in the United States and/or other countries.";
});

app.controller('HomeController', function($scope, $location, anchorSmoothScroll, resources, partners, partnerTypes, $timeout,aboutContent){
  //get resources using service
  $scope.resources = resources;
  //get partners using service
  $scope.partners = partners;
  //get partner types using service
  $scope.partnerTypes = partnerTypes;
  //get the about content from service
  $scope.content = aboutContent;
  $scope.content.about = aboutContent.description;
  $scope.content.title = aboutContent.title;
});

app.controller('PartnerController', function($scope, partnerBenefits){
  // get partner benefits using service
  $scope.benefits = partnerBenefits;
});

app.controller('ApplyPartnerController', function($scope, partnerBenefits, $http, $location, error){
  // get partner benefits using service
  $scope.benefits = partnerBenefits;
  //get error from service
  $scope.error = error;

  $scope.submit = function(partner){
    // create post request
    var req = {
     method: 'POST',
     url: '/email',

     data: partner
    }
    // send post request to backend
    $http(req).then(function(data){
      //redirect to success route
      $location.path('/success');
    }).catch(function(error){
      // get error message from response
      $scope.error.message = error.data;
      // redirect to error route
      $location.path('/error');
    });
    }
});

app.controller('ContactController', function(){

});

app.controller('SuccessController', function(){

});

app.controller('ErrorController', function($scope, error){
  // get error from service
  $scope.error = error;
  // update error on the controller
  $scope.error.message = error.message;
});
