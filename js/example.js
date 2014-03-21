angular.module('regulus', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
    'use strict';
    $scope.oneAtATime = false;
    $scope.destaque = {
        title: "50% de desconto em livros",
        description: "Venha ver os livros que estão com desconto!",
        button: {
            title: "Saber mais...",
            link: "/livraria.html"
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
        }
    ];
}