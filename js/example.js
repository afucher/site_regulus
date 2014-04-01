var regulusApp = angular.module('regulusApp', [ 'ngRoute', 'duScroll']);

regulusApp.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/cursos', {
            templateUrl : 'pages/cursos.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/programas', {
            templateUrl : 'pages/software.html',
            controller  : 'contactController'
        });
});
/*regulusApp.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
  }).
  run(function($rootScope, $location){
    $rootScope.$on('duScrollspy:becameActive', function($event, $element){
        if($element.parent()[0].tagName == "LI"){
            $element.parent().addClass("active");
        }       
    });
    $rootScope.$on('duScrollspy:becameInactive', function($event, $element){
        if($element.parent()[0].tagName == "LI"){
            $element.parent().removeClass("active");
        }       
    });
  });*/



// create the controller and inject Angular's $scope
regulusApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    'use strict';
    $scope.message = "Hello World";
    $scope.oneAtATime = false;
    $scope.destaque = {
        title: "Pensando em estudar astrologia?",
        description: "Confira nossos cursos...",
        button: {
            title: "Cursos...",
            link: "#/cursos"
        }
    };
    $scope.cursos = [
        {
            title: "Palestra Aberta",
            subtitle: "Assim na Terra como no Céu",
            author: "Patrícia Valente",
            description: "Como a Astrologia e o conhecimento do próprio mapa Astrológico permite nos conectarmos com o Divino em nós"
        },
        {
            title: "Titulodasdads",
            subtitle: "Sub-titulo",
            author: "Autor",
            description: "Uma breve descrição do que é!"
        },
        {
            title: "Titulo",
            author: "Autor",
            description: "Uma breve descrição do que é!"
        },
        {
            title: "Titulo",
            author: "Autor",
            description: "Uma breve descrição do que é!"
        },
        {
            title: "Titulo",
            author: "Autor",
            description: "Uma breve descrição do que é!"
        }
    ];
});

regulusApp.controller('aboutController', function ($scope) {
    'use strict';
    $scope.message = 'Look! I am an about page.';
});

regulusApp.controller('contactController', function ($scope) {
    'use strict';
    $scope.message = 'Contact us! JK. This is just a demo.';
});
