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

regulusApp.controller('cursosController', function ($scope) {
    // create a message to display in our view
    'use strict';
    $scope.cursos = [
        {
            id:"1",
            title: "Princípios e Fundamentos da Astrologia",
            author: "Patrícia Valente",
            description: "Módulo inicial destinado à quem não tem conhecimentos em astrologia, são passadas as bases da Astrologia: princípios, significado de planetas, signos, casas e aspectos.",
            classes: [{startDay : "07/03 (sextas)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "tarde (14h30 às 16h30)",
                       professor : "Profª. Nina M.F. Alves"
                  },{startDay : "11/03 (terças)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "noite (20h00 às 22h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "15/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "manhã (10h00 às 14h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "22/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "tarde (14h00 às 18h00)",
                       professor : "Profª. Nina M.F. Alves"
                  }

            ]
        },
        {
            id:"2",
            title: "Regentes e Dispositores",
            author: "Patrícia Valente",
            description: "Módulo inicial destinado à quem não tem conhecimentos em astrologia, são passadas as bases da Astrologia: princípios, significado de planetas, signos, casas e aspectos.",
            classes: [{startDay : "07/03 (sextas)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "tarde (14h30 às 16h30)",
                       professor : "Profª. Nina M.F. Alves"
                  }
            ]
        },{
            id:"3",
            title: "Princípios e Fundamentos da Astrologia",
            author: "Patrícia Valente",
            description: "Módulo inicial destinado à quem não tem conhecimentos em astrologia, são passadas as bases da Astrologia: princípios, significado de planetas, signos, casas e aspectos.",
            classes: [{startDay : "07/03 (sextas)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "tarde (14h30 às 16h30)",
                       professor : "Profª. Nina M.F. Alves"
                  },{startDay : "11/03 (terças)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "noite (20h00 às 22h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "15/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "manhã (10h00 às 14h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "22/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "tarde (14h00 às 18h00)",
                       professor : "Profª. Nina M.F. Alves"
                  }

            ]
        },{
            id:"4",
            title: "Princípios e Fundamentos da Astrologia",
            author: "Patrícia Valente",
            description: "Módulo inicial destinado à quem não tem conhecimentos em astrologia, são passadas as bases da Astrologia: princípios, significado de planetas, signos, casas e aspectos.",
            classes: [{startDay : "07/03 (sextas)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "tarde (14h30 às 16h30)",
                       professor : "Profª. Nina M.F. Alves"
                  },{startDay : "11/03 (terças)",
                       duration : "4 meses",
                       frequency : "1 aula por semana",
                       schedule : "noite (20h00 às 22h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "15/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "manhã (10h00 às 14h00)",
                       professor : "Prof. Elmer Baumgratz"
                  },{startDay : "22/03 (sábados)",
                       duration : "4 meses",
                       frequency : "2 aulas por mês de 4 horas (aulas quinzenais)",
                       schedule : "tarde (14h00 às 18h00)",
                       professor : "Profª. Nina M.F. Alves"
                  }

            ]
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
