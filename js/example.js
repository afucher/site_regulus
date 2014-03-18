angular.module('regulus', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.cursos = [
    {
      title: "Palestra Aberta",
      subtitle: "Assim na Terra como no Céu",
      author: "Patrícia Valente",
      description: "Como a Astrologia e o conhecimento do próprio mapa Astrológico permite nos conectarmos com o Divino em nós"
    },
    {
      title: "Titulo",
      subtitle: "Sub-titulo",
      author: "Autor",
      description: "Uma breve descrição do que é!"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}