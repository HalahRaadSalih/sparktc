var app = angular.module('sparktc');

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

// service for partners information : logo and link
app.factory('partners', function(){
  return [
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/IBM.svg',
      url:"http://www.ibm.com/us-en/"
    },
    {
      image:'http://www.spark.tc/wp-content/themes/bones/library/images/amplab.svg',
      url:"https://amplab.cs.berkeley.edu/"
    },
    {
      image:'/client/images/lightbend-230-49.png',
      url:"https://www.lightbend.com/company"
    },
    {
      image:'http://www.galvanize.com/wp-content/themes/galvanize/img/galvanize-logo.svg',
      url:"https://galvanize.com/"
    },
    {
      image:'/client/images/skymind-logo.png',
      url:"http://www.skymind.io/"
    },
    {
      image:"/client/images/datafellas-logo.png",
      url:"http://www.data-fellas.guru/"
    },
    {
      image:"/client/images/confluent_logo.png",
      url:"http://www.confluent.io/"
    },
    {
      image:"/client/images/rstudio-logo.png",
      url:"https://www.rstudio.com/"
    },
    {
      image:"https://ga-core.s3.amazonaws.com/cms/files/files/000/002/625/original/datacamp_v2.jpg",
      url:"https://www.datacamp.com/"
    },
    {
      image:"https://p4.zdassets.com/hc/settings_assets/558139/200117215/O4fX0WytFgMoaT6qIVasMg-Mesosphere_Logo_-_Horizontal_Lockup__RGB__Jumbo_.png",
      url:"https://mesosphere.com/"
    },
    {
      image:"https://static-www.wandisco.com/assets/blt7023e9c8337552e2/logo.png?q=1456997308453%22",
      url:"http://www.wandisco.com/home"
    },
    {
      image:"http://uploads.webflow.com/54d006aa2cb8e4a17a02e212/5522ca29dcc6adcc03851661_SVDS_logo_color_Aug_16_2013.png",
      url:"http://www.svds.com/"
    },
    {
      image:"/client/images/datarobot-logo.png",
      url:"https://www.datarobot.com/"
    },
    {
      image:"/client/images/unifi-logo.png",
      url:"http://unifisoftware.com/"
    },
    {
      image:"https://dato.com/images/dato_logo.svg",
      url:"https://dato.com/"
    },
    {
      image:"/client/images/h2o-logo.png",
      url:"http://www.h2o.ai/"
    },
    {
      image:"/client/images/DataKind_logo.png",
      url:"http://www.datakind.org/"
    },
    {
      image:"https://siqueries.com/static/img/logo_black.png",
      url:"http://siqueries.com"
    }
  ];
});

// service for about information
app.factory('aboutContent', function(){
  return {
    title: "What We Are About",
    description: "Open Analytics Ecosystem program offers a first of its kind open partnership program to build relationships with in the open analytics community directly with the business leaders, applications makers, and technology experts to decrease the time it takes for them to achieve success. Starting at Strata Hadoop World San Jose, we'll launch a pilot program to test the assumptions above by accepting applications to join, interviewing prospective partners, and advertising on social media from the core Open Analytics Ecosystem audience. Following Strata Hadoop World San Jose, we'll update the program with the lessons learned, onboard partners, and invite them to the first ever Open Analytics Ecosystem Reunion during Spark Summit San Francisco.",
    partnerTypes: "Who We Are"
  }
});

// service for scroll to about section
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

// service for partners types information
app.factory('partnerTypes', function(){

  return [
    {
      title:"Business Leader",
      image:"/client/images/P5267270.jpg",
      description:'Business leaders identify innovative ways to transform their business model with data. There is a growing community around Apache Spark who\'s members are interested in driving Open Analytics Ecosystem adoption in their business.',
      headTitles:['Business Leader', 'Acquaintance', 'Friend', 'BFF'],
      benefits:[
        {
          title:"Training / Skills Development",
          checkList:["✓","✓","✓"]
        },
        {
          title:"Hangouts with Our Friends",
          checkList:["✓", "✓", "✓"]
        },
        {
          title:"Use Case Examples",
          checkList:["✓","✓","✓"]
        },
        {
          title:"Direct Slack to Members",
          checkList:["","✓","✓"]
        },
        {
          title:"Gets the Member List",
          checkList:["", "✓", "✓"]
        },
        {
          title:"Inclusion on our Blog",
          checkList:["", "", "✓"]
        },
        {
          title:"Partner Advisory Council",
          checkList:["", "", "✓"]
        }

      ]
    },
    {
      title:"Development Expert",
      image:"/client/images/development_expert.jpg",
      description:'Development experts use Open Analytics Ecosystem Community to share new innovations and receive feedback from their peers on whether an additional piece of technology is necessary and vet the technology for market adoption.',
      headTitles:['Development Expert', 'Acquaintance', 'Friend', 'BFF'],
      benefits:[
        {
          title:"Code Contribution Training",
          checkList:["✓","✓","✓"]
        },
        {
          title:"Discounted Reference Books",
          checkList:["✓", "✓", "✓"]
        },
        {
          title:"Code Review by Expert",
          checkList:["", "✓", "✓"]
        },
        {
          title:"Co-development (prototypes and integrations)",
          checkList:["", "✓", "✓"]
        },
        {
          title:"Roadmap Reviews",
          checkList:["","","✓"]
        },
        {
          title:"Technical Advisory Council",
          checkList:["", "", "✓"]
        }
      ]
  },
  {
    title:"Application Maker",
    image:"/client/images/applications_makers.jpeg",
    description:'Application Makers who wish to build applications for the business with Apache Spark don\'t have to worry about compatibility, system integrations, data source connections, and decipher complex pricing to know how to make money from their application. Application makers seek direct feedback from early adopters of an Open Analytics Ecosystem.',
    headTitles:['Application Maker', 'Acquaintance', 'Friend', 'BFF'],
    benefits:[
      {
        title:"Reference Architectures",
        checkList:["✓","✓","✓"]
      },
      {
        title:"Data Sources",
        checkList:["✓", "✓", "✓"]
      },
      {
        title:"Datapalooza and Partner Data Science Event Access",
        checkList:["✓", "✓", "✓"]
      },
      {
        title:"Application Exposure to Executive Clients",
        checkList:["", "✓", "✓"]
      },
      {
        title:"Free Open Analytics Tech",
        checkList:["", "✓", "✓"]
      },
      {
        title:"Executive Mentorship",
        checkList:["", "", "✓"]
      },
      {
        title:"Design Workshop",
        checkList:["","","✓"]
      },
      {
        title:"Assigned Agile Coach",
        checkList:["", "", "✓"]
      },
    ]
  }];
});

// service for partners benefits
app.factory('partnerBenefits',function(){
  return [
    {
      title:"Community",
      image:"http://www.spark.tc/wp-content/themes/bones/library/images/hiring-hero.png",
      description:"",
      headTitles:['Community', 'Amount', 'Status'],
      benefits:[
        {
          title: 'Attend Open Analytics Meetups',
          amount: '5',
          Status: 'Acquaintance'
        },
        {
          title: 'Host Open Analytics Meetups',
          amount: '5',
          Status: 'Friend'
        },
        {
          title: 'Speak at Open Analytics Meetups',
          amount: '5',
          Status: 'BFF'
        }
      ]
    },
    {
      title:"Skills/Training",
      image:"http://www.spark.tc/wp-content/themes/bones/library/images/hiring-hero.png",
      description:"",
      headTitles:['Skills / Training', 'Amount', 'Status'],
      benefits:[
        {
          title: 'Free Tools',
          amount: '1',
          Status: 'Acquaintance'
        },
        {
          title: 'Course Materials',
          amount: '3',
          Status: 'Friend'
        },
        {
          title: 'Experts Training',
          amount: '5',
          Status: 'BFF'
        }
      ]
    },
    {
      title:"Open Source Contributions",
      image:"http://www.spark.tc/wp-content/themes/bones/library/images/hiring-hero.png",
      description:"",
      headTitles:['Open Source Contributions', 'Amount', 'Status'],
      benefits:[
        {
          title: 'Bug Fixing',
          amount: '20',
          Status: 'Acquaintance'
        },
        {
          title: 'Feature Requirements',
          amount: '15',
          Status: 'Friend'
        },
        {
          title: 'JIRA',
          amount: '10',
          Status: 'BFF'
        }
      ]
    },
    {
      title:"Application Design",
      image:"http://www.spark.tc/wp-content/themes/bones/library/images/hiring-hero.png",
      description:"",
      headTitles:['Application Design', 'Amount', 'Status'],
      benefits:[
        {
          title: 'Application and Use Case',
          amount: '10',
          Status: 'Acquaintance'
        },
        {
          title: 'Architecture with Design Plan',
          amount: '2',
          Status: 'Friend'
        },
        {
          title: 'Complete Data Product',
          amount: '1',
          Status: 'BFF'
        }
      ]
    }

  ];
});

//service for error handling
app.factory('error', function(){
  return {};
});
