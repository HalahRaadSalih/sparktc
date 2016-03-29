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
  var imageLoader = document.getElementById('logoLoader');
      imageLoader.addEventListener('change', handleImage, false);
  var canvas = document.getElementById('logoCanvas');
  var ctx = canvas.getContext('2d');


  function handleImage(e){
      var reader = new FileReader();
      reader.onload = function(event){
          var img = new Image();
          img.onload = function(){
            var ratio = 1;
            var height = img.naturalHeight;
            var width = img.naturalWidth;
            //Adjust the ratio of the image to fit the canvas
            if (height > 500 || width > 500) {
                ratio = 450 / Math.max(height, width);
            }
            canvas.width = width * ratio;
            canvas.height = height * ratio;

              ctx.drawImage(img,0,0,(width * ratio), (height * ratio));
          }

          img.src = event.target.result;
      }

      reader.readAsDataURL(e.target.files[0]);
  }

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
