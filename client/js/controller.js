var app = angular.module('sparktc');

app.controller('HomeController', function($scope){
});

app.controller('CarouselDemoCtrl',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [

    {
      image: 'http://www.spark.tc/wp-content/themes/bones/library/images/datapalooza-hero.jpg'
    },
    {
      image: 'http://www.spark.tc/wp-content/themes/bones/library/images/Redrock-Animation.gif'
    },
    {
      image: 'http://www.spark.tc/wp-content/themes/bones/library/images/hiring-hero.png'
    }
    
  ];
});
