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
app.factory('partners', function(){
  return [
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/IBM.svg'
    },
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/amplab.svg'
    },
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/Typesafe.svg'
    },
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/databricks.svg'
    }
  ];
});

app.factory('aboutContent', function(){
  return "Open Analytics Ecosystem program offers a first of its kind open partnership program to build relationships with in the open analytics community directly with the business leaders, applications makers, and technology experts to decrease the time it takes for them to achieve success. Starting at Strata Hadoop World San Jose, we'll launch a pilot program to test the assumptions above by accepting applications to join, interviewing prospective partners, and advertising on social media from the core Open Analytics Ecosystem audience. Following Strata Hadoop World San Jose, we'll update the program with the lessons learned, onboard partners, and invite them to the first ever Open Analytics Ecosystem Reunion during Spark Summit San Francisco.";
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
