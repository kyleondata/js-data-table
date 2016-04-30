var app = angular.module('myapp',[]);

app.controller('greetMe', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);