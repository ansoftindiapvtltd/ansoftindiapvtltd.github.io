var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "AboutCtrl"
        })
         .when("/contact", {
             templateUrl: "partials/contact.html",
             controller: "ContactCtrl"
         })
         .when("/home", {
              templateUrl: "partials/home.html",
              controller: "HomeCtrl"
          })
         .when("/itstaffing", {
             templateUrl: "partials/itstaffing.html",
             controller: "ItstaffingCtrl"
         })
         .when("/product", {
             templateUrl: "partials/product.html",
             controller: "ProductCtrl"
         })
         .when("/services", {
             templateUrl: "partials/services.html",
             controller: "ServicesCtrl"
         })
         .when("/technologies", {
             templateUrl: "partials/technologies.html",
             controller: "TechnologiesCtrl"
         })
	.otherwise({
	    redirectTo: "/home"
	});
});

myApp.controller("HeaderCtrl", function ($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "The AN Soft";
    $scope.appDetails.tagline = "Big problem, simple solution";

    $scope.nav = {};
    $scope.nav.isActive = function (path) {
        if (path === $location.path()) {
            return true;
        }

        return false;
    }
});

myApp.controller("HomeCtrl", function ($scope) {
    $scope.homes = [
           {
               imgUrl: "..//img//home-who-we-are.jpg",
               name: "Who we are",
               description: '',
               details: "The An Soft offers one-stop solution for all IT- services , and IT staffing and out-sourcing solutions for today’s business. The An Soft having bunch of experience and dedicated professionals team and leading IT solutions provider in Raleigh USA that offers comprehensive range of cutting edge services, Data warehouse and ETL solution that help businesses to grow and attain desired success. We deal with not just IT consulting and staffing, but also product development at offshore and onshore team for software development, social networking and application integration and maintenance."
           },
           {
               imgUrl: "..//img//home-value.jpg",
               name: "The An Values",
               description: '',
               details: "Combining cross-industry experience with extensive technology research helped us to create a new benchmark of success and reach a new height of industry-specific software design and development solutions customized for both industrial niche and unique needs of enterprise. We map trends of various market niches, complement them with current goals and needs of a business and provide a comprehensive tech insight through our continued enhancement of all the activities and business processes and help our client get a winning position in the market place. IT being at core of all industries, AN Soft India boasts of serving almost every vertical. Today, every industry functions using technology to automate and streamline crucial organizational processes; hence, we got an opportunity to build up a vast portfolio of work with clients from diverse industry verticals."
           }
    ];
    $scope.seeMore = function (home) {
        console.log("add to kart: ", home);
    }
});

//var ServicesCtrl = function ($scope) {

myApp.controller("ServicesCtrl", function ($scope) {

    $scope.title = 'Services';

    $scope.servicess = [
		{
		    imgUrl: "..//img//Services-it-services.png",
		    name: "IT Services",
		    description: '',
		    details: "The AN Soft is an established application development company that collaborates with providers of software on-demand services and software vendors. Our team of skilled software development professionals, business analysts, project managers and quality assurance engineers will partner in your application development."
		},
        {
            imgUrl: "..//img//Services-sd.png",
            name: "Software Development",
            description: '',
            details: "The AN Soft india designs, maintains and implements Software Development for organizations, designed and run according to your specifications. Contact AN Soft india Pvt. Ltd. for Software Development, implementation, consulting at ansoftindiapvtltd@gmail.com or call us:+1 980-267-4322."
        },
        {
            imgUrl: "..//img//Services-mobile-application.png",
            name: "Mobile Application",
            description: '',
            details: "With the burgeoning mobile application industry it is always difficult to stand out and make an impact on your customers. But, with our highly specialized mobile programming engineers we cut across all major mobile platforms and technologies to provide mobility solutions that help you grow your business in entirely new ways."
        },
        {
            imgUrl: "..//img//Services-out-sourcing.png",
            name: "Out Sourcing",
            description: '',
            details: "The AN Soft india international class manpower creates high quality software solutions. With offices in India and in USA AN Soft india is an offshore outsourcing company specializing in consultant."
        },
        {
            imgUrl: "..//img//Services-consulting.png",
            name: "Consulting",
            description: '',
            details: "The AN Soft prides in providing clients with qualified and professional consultants, providing excellence in service and support. We specialize in working with Manufacturing, Government, Banking & Financial Institutions. Microsoft Application, Leverage From A Commendable Sense Of Microsoft Technology With Microsoft Application, Software Development, Highly skilled software development professionals who deliver fuly customized, Open Source Development, End-to-end open source web design and development solutions which includes development, Ecommerce Development, ecommerce development solutions with the best software and development plans for customized , Mobile Application, Develop fully customized mobile applications and tablet applications on Android, BlackBerry, CMS Development, Offering comprehensive range of CMS development services tailored to the client’s business."
        },
        {
            imgUrl: "..//img//Services-others.png",
            name: "Other",
            description: '',
            details: "The AN Soft provides solutions for Business Intelligence expertise, Business Objects XI R2/R3, 4.0, Universe Designer, Web-I/Desktop Intelligence, , Microsoft BIDS Tools , SSIS, SSRS, SSAS, Info view, Xcelsius , Crystal report, BO SDK, OLAP tool and Oracle Business Intelligence Enterprises edition (OBIEE), ETL Extract, Transform, Load tool , Oracle Warehouse Builder 10g r1 and r2,11g, Business Object Data Services, IBM DATA STAGE8.5, J2EE Web Application, , JAVA API Design and Development, BODS, DATASTAGE, OWB,BO,OBIEE, MicroStrategy,COGNOS (data manger planning,TM1, qlik)"
        }
    ];

    $scope.seeMore = function (sev) {
        console.log("add to kart: ", sev);
    }
});

//TechnologiesCtrl
//var TechnologiesCtrl = function ($scope) {

myApp.controller("TechnologiesCtrl", function ($scope) {

    $scope.title = 'Technologies';

    $scope.Technologies = [
		{
		    imgUrl: "..//img//tech-asp.jpg",
		    name: "Asp Dotnet Development - Websites",
		    description: 'Microsoft ASP.NET Technology Expertise',
		    details: "ASP.Net technology provides rapid application development, platform independence, network transparency and object oriented programming environment. AN Soft India  renders full-cycle ASP.NET application development solutions that delivers full spectrum of Microsoft’s technology stack for web, desktop, distributed and mobile applications. We have profound expertise in ASP.Net application development across various industry segments. Our in-house team of ASP.Net developers ensures qualitative solutions that are tailored to meet the specifications of your business requirement. We utilize the latest Microsoft .Net framework, technological expertise and industry best practices to deliver the most reliable, scalable and robust solutions at a high quality levels."
		},
        {
            imgUrl: "..//img//tech-mobile.jpg",
            name: "Asp Dotnet Development - Mobile",
            description: 'Development',
            details: "Power mobile apps with responsive design and mobile frameworks. Our in-house team of ASP.Net developers ensures qualitative solutions that are tailored to meet the specifications of your business requirement. We utilize the latest Microsoft .Net framework, technological expertise and industry best practices to deliver the most reliable, scalable and robust solutions at a high quality levels."
        },
        {
            imgUrl: "..//img//tech-apis.jpg",
            name: "Asp Dotnet Development - APIs",
            description: 'Development',
            details: "Write web APIs and services that produce JSON or XML to talk to connected devices. A server-side web API is a programmatic interface consisting of one or more publicly exposed endpoints to a defined request-response message system, typically expressed in JSON or XML, which is exposed via the web—most commonly by means of an HTTP-based web server."
        },
        {
            imgUrl: "..//img//tech-php.jpg",
            name: "PHP Web Application Development ",
            description: '',
            details: "PHP is a server side scripting language primarily used to create most impulsive and interactive web applications. AN Soft India  is a leading PHP web application development company, who is actively involved in developing of the most appealing, highly interactive, user centric wide array of e-commerce applications, business applications, web applications and PHP applications."
        },
         {
             imgUrl: "..//img//tech-sap.jpg",
             name: "SAP Implementation Services Overview",
             description: '',
             details: "SAP is a market leader for CRM and enterprise solutions which allows easy and global integration of business processes, creating a more efficient work environment and giving users the real-time information thereby reducing the possibility of errors and redundant information. AN Soft India  has been implementing SAP for more than 10 years and our ability to implement customized SAP solutions enables entire organization to respond to the changing business challenges with ease. Our SAP service offerings span all phases of the enterprise life cycle from initial planning to implementation to customization to development to testing to deployment and post go-live support."
         },
         {
             imgUrl: "..//img//tech-crm.jpg",
             name: "Customer Relationship Management",
             description: '',
             details: "AN Soft India  help its clients to meet the higher efficiency in their enterprise operations through providing customized services in the areas including Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Supply Chain Management (SCM), Supplier Relationship Management (SRM) and SAP Service and Asset Management."
         }
    ];

    $scope.seeMore = function (tec) {
        console.log("add to kart: ", tec);
    }
});



//TechnologiesCtrl
//var ItstaffingCtrl = function ($scope) {

myApp.controller("ItstaffingCtrl", function ($scope) {
    
    $scope.title = 'II Staffing';

    $scope.itstaffings = [
		{
		    imgUrl: "..//img//it-staffing.jpg",
		    name: "The AN Soft End-to-End Development Services for the Information Technology Vertical",
		    description: '',
		    details: "The An Soft is an established application development company that collaborates with providers of software on-demand services and software vendors. Our team of skilled software development professionals, business analysts, project managers and quality assurance engineers will partner in your application development effort as a trustworthy collaborator and provide remote assistance throughout all the milestones of software development life cycle from elaboration to application support and maintenance."
		},
        {
            imgUrl: "..//img//it-staffing1.jpg",
            name: "Strategic Resourcing /Staff Augmentation",
            description: '',
            details: "From a single resource to an entire team, we offer short-term and long-term contracts for a contingent workforce with experience in all phases of IT development, functional services and geographies. We work closely with hiring managers to ensure our candidates match your requirements for every single requirement. Our global recruiting team of more than 30 full time recruiters in over 3 countries are dedicated to strategic resourcing, specializing in IT skilled resource identification and recruiting. We have access to and continuously replenish our worldwide database of more than 200,000 professionals to rapidly fill your positions."
        },
        {
            imgUrl: "..//img//it-staffing2.jpg",
            name: "Application Support and Maintenance",
            description: '',
            details: "Write web APIs and services that produce JSON or XML to talk to connected devices."
        },
        {
            imgUrl: "..//img//it-staffing3.jpg",
            name: "Software Testing",
            description: '',
            details: "An Soft is a team of software development professionals that is not just another assembly shop. Quality is at the very center of our philosophy that is introduced from the initial stages of the process – we start testing your idea from the first call and proceed into the development and support phases to make sure that you get the maximum ROI in your application through its fault-proof performance and impeccable reputation of your business in the eyes of end-users."
        }, {
            imgUrl: "..//img//it-staffing4.jpg",
            name: "Application Management",
            description: '',
            details: "Write web APIs and services that produce JSON or XML to talk to connected devices.                                                                                                                                                                                                                                                                                                                                                                                                  ."
        }, {
            imgUrl: "..//img//it-staffing5.jpg",
            name: "Back Office and Data Management",
            description: '',
            details: "Write web APIs and services that produce JSON or XML to talk to connected devices..                                                                                                                                                                                                                                                                                                                                                                                                  ."
        }, {
            imgUrl: "..//img//it-staffing6.jpg",
            name: "DDC offshore",
            description: '',
            details: "Write web APIs and services that produce JSON or XML to talk to connected devices..                                                                                                                                                                                                                                                                                                                                                                                                  ."
        }
    ];

    $scope.seeMore = function (tec) {
        console.log("add to kart: ", tec);
    }
});

//ProductCtrl
//var ProductCtrl = function ($scope) {

myApp.controller("ProductCtrl", function ($scope) {

    $scope.title = 'Products';

    $scope.products = [
        {
            imgUrl: "..//img//product-yd.jpg",
            name: "Dry Cosmetoplastic Clinic - Dr. Yatindra Dewangan",
            description: 'http://www.drycosmetoplastic.com/',
            details: "We developed the 'http://www.drycosmetoplastic.com/' web site by clean, sharp, professional and web developers. we always developed the web sites which have and ready to adapt to the future growth of your business or organization, and the developed 'http://www.drycosmetoplastic.com/' web pages have 3 year domain resister and free maintains (Limited offer ) based on changes required place over phone, meetings or  any other virtual or face to face communication media. Our basic package offers you a many page website with a design based on our standard layout and created so many pages designed by Graphic designers professionals  for make your business stables. check more about Dr. Yatindra kumar dewangan (M.B.B.S.,M.S.,M.ch.) Cosmetic and Plastic in below:"
        },
        {
            imgUrl: "..//img//product-cocoon.jpg",
            name: "Day Care, Junior Toddler Day Care, Senior Toddler Day Care, Before and After school program - by CoCoon International Day Car & Pre School",
            description: 'googledrive.com/host/0B8cdryUw8N6Fd0d3V09WN3BjNk0',
            details: "Best Play School in India, Cocoon Schools are a chain of high-end preparatory schools catering to preschoolers and providing day care and after school services. Cocoon schools are set up by Founding Years – A multi platform education services organization. Cocoon the Best Play School in India caters to an age group of 1-10 years. Parents choose our school because of the high quality of teaching, education, infrastructure and resources that we provide – enabling our children to cope and succeed in the 21st century. They also choose Cocoon because we are the Best Play School in India and believe that the school is a community of parents and they also have a say in how their children are educated and cared for."
        },
        {
            imgUrl: "..//img//product-yoga.jpg",
            name: "Delampady Yoga Online Yoga/Mudra Training Key To Better Health & New Life",
            description: 'http://keytobetterhealth.myfreesites.net/',
            details: "Popularly known as Yogaratna Delampady,he has succeeded in conducting free yogasana training camps to improve the health of more than sixty thousand (60,000) people in and around Mangalore. He has made people realize the significance of yoga and has taught them effectively. He can perform more than 120 Asanas and he can explain the benefits of all the Asanas and he follows this style anywhere he goes and performs the same.In return to his selfless service in the form of teaching Yogasanas to protect the health of the people, their support and co-operation are the most priceable rewards from them."
        },
        {
            imgUrl: "..//img//product-yoga2.jpg",
            name: "comming soon Yoga Online Yoga/Mudra Training Key To Better Health & New Life",
            description: 'http://keytobetterhealth.tk',
            details: "He is expert in Yogic Science. He teaches yoga to his disciples in Mangalore. Popularly Known as Yogaratna Gopalakrishna Delampady.Popularly known as Yogaratna Delampady,he has succeeded in conducting free yogasana training camps to improve the health of more than sixty thousand (60,000) people in and around Mangalore. He has made people realize the significance of yoga and has taught them effectively. He can perform more than 120 Asanas and he can explain the benefits of all the Asanas and he follows this style anywhere he goes and performs the same.In return to his selfless service in the form of teaching Yogasanas to protect the health of the people, their support and co-operation are the most priceable rewards from them."
        },
		{
            imgUrl: "..//img//product-msc1.jpg",
            name: "mysoftclick is an online learning platform and aimed at professional adults,students take courses largely as a means of improving job-related skills.",
            description: 'http://mysoftclick.ml or https://mysoftclick.github.io/',
            details: "My soft click delves into a wide array of technologies and technology domains with a view to cater to the requirements emerging from every sector of this dynamic IT industry. MSC has nurtured and whetted the skills of its experts to sculpt them into strategic technology consultants who render pivotal advice that goes a long way in turning the tide of business in your favour."
	    ,link:"http://mysoftclick.ml/"
        },
		{
            imgUrl: "..//img//product-cv.jpg",
            name: "Resume Blogger * Job Position * Resume-Now",
            description: 'http://soniashu.blogspot.com/p/profile_27.html?view=sidebar',
            details: "We support Blogger for resume with objective, responsibilities and experience that will guide you to write an optimized resume for your job application. it helps to show case your talent in the right place and for right job which you deserve and choose right path from visibility of many way of path. best way to show case your talent and expertise and skill, Updates on regular basis and small time of amount required for make a move from old to new job."
        },
		{
            imgUrl: "..//img//product-painthub.jpg",
            name: "Habib here, Specialized Painting & Remodeling",
            description: 'http://painthub.ml',
            details: "Hey I am Habib! Specialized Painting & Remodeling is a professional painting. Specialized Painting & Remodeling treats your home or business as if it were our own. We take care of your project with professionalism and attention to detail, and complete it on time and within budget. Exterior Painting , Interior Painting, Paint & Stain Consultation, Small Industrial Painting and Technical Coatings. See https://painthub.github.io"
        }
    ];

    $scope.seeMore = function (tec) {
        console.log("add to kart: ", tec);
    }
});


//contacts

//var ContactCtrl = function ($scope) {
myApp.controller("ContactCtrl", function ($scope) {

    $scope.title = 'Contacts';

    $scope.contacts = [
		{
		    imgUrl: "..//img//asp.jpg",
		    name: "USA",
		    description: 'AN Soft LCC. USA',
		    details: "Email: ansoftindiapvtltd@gmail.com"
		},
        {
            imgUrl: "..//img//asp.jpg",
            name: "INDIA-MUMBAI",
            description: 'AN Soft India Pvt. Ltd.',
            details: "Email: ansoftindiapvtltd@gmail.com"
        },
        {
            imgUrl: "..//img//asp.jpg",
            name: "INDIA-DELHI",
            description: 'AN Soft India Pvt. Ltd.',
            details: "Email: ansoftindiapvtltd@gmail.com"
        },
    ];

    $scope.seeMore = function (contact) {
        console.log("add to kart: ", contact);
    }
});
