var app = angular.module('sparktc');

app.controller('HomeController', function($scope){
});

app.controller('CarouselDemoCtrl',function($scope, carsoulSlides){
  $scope.myInterval = 3000;
  $scope.slides = carsoulSlides;
});


app.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {

    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);

    };
  });

  app.controller('AboutController', function($scope){
    $scope.content = {};
    $scope.content.about = "To truly have Data Science reach escape velocity, we need to invest now in an ecosystem of open analytics partners who demonstrate the business value of Data Science and Open Analytics. We are living in a new era of analytics where every data assumption must be turned on its head and re-examined in completely novel ways. Apache Spark has emerged as the Analytics operating system of choice and one of the fastest growing open source projects with over XXX contributors. At its core, Apache Spark offers a lightweight, deeply integrated, multi-language, data access framework for anyone to work with any data in any environment. Therefore, the Open Analytics Ecosystem's initial focus is on Apache Spark to build Cognitive solutions. Today, the only way for a community member to build with Apache Spark is through an open source developer community and disparate resources. Many of the community members view this as a closed community specific to one vendor or a handful of venders that has led to the start of a fragmentation among this community as evidenced by the proliferation of \"big data\" or \"data science\" or \"name your technology\" events that are being started each year. Community members consist of dev ops, data analysts, data engineers, data scientists, data visualizers, app developers, chief data officers, data architects, and data aficionados who all want to learn more about Apache Spark and get involved. More broadly, the business community is in need of a open ecosystem to innovate with analytics to transform their organization.";

  });
