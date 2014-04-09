var regulusApp = angular.module('regulusApp', [ 'ngRoute', 'duScroll','ui.bootstrap']);

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
            templateUrl : 'pages/cursos.html',
            controller : 'cursosController'
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
        })
        .otherwise({
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        });
});


// create the controller and inject Angular's $scope
regulusApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    'use strict';
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

regulusApp.controller('cursosController', function ($scope, $http) {
    // create a message to display in our view
    'use strict';
    $scope.cursos = {};
    $http.get('json/cursos.json').success(function(data) {
        $scope.cursos = data;
    });
});

regulusApp.controller('aboutController', function ($scope) {
    'use strict';
    $scope.message = 'Look! I am an about page.';
});

regulusApp.controller('contactController', function ($scope) {
    'use strict';
    $scope.message = 'Contact us! JK. This is just a demo.';
});
