var app = angular.module('sparktc');

app.factory('carsoulSlides', function(){
  return [

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

app.factory('resources', function(){
  return [
    {
      name:"Code",
      link:""
    },
    {
      name: "Contrubitions",
      link:""
    },
    {
      name: "University",
      link:""
    },
    {
      name: "Apache SystemML",
      link:""
    },
    {
      name: "Apache Spark",
      link:""
    }

  ];
});

app.factory('aboutContent', function(){
  return "To truly have Data Science reach escape velocity, we need to invest now in an ecosystem of open analytics partners who demonstrate the business value of Data Science and Open Analytics. We are living in a new era of analytics where every data assumption must be turned on its head and re-examined in completely novel ways. Apache Spark has emerged as the Analytics operating system of choice and one of the fastest growing open source projects with over XXX contributors. At its core, Apache Spark offers a lightweight, deeply integrated, multi-language, data access framework for anyone to work with any data in any environment. Therefore, the Open Analytics Ecosystem's initial focus is on Apache Spark to build Cognitive solutions. Today, the only way for a community member to build with Apache Spark is through an open source developer community and disparate resources. Many of the community members view this as a closed community specific to one vendor or a handful of venders that has led to the start of a fragmentation among this community as evidenced by the proliferation of \"big data\" or \"data science\" or \"name your technology\" events that are being started each year. Community members consist of dev ops, data analysts, data engineers, data scientists, data visualizers, app developers, chief data officers, data architects, and data aficionados who all want to learn more about Apache Spark and get involved. More broadly, the business community is in need of a open ecosystem to innovate with analytics to transform their organization.";
});

app.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});
