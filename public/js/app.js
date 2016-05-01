var app = angular.module('myapp',[]);

app.controller('greetMe', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.controller('iconToolbar', ['$scope', function($scope) { 
  $scope.toolDrop = function() {
        $('.drop-down').toggleClass("open");
    };
}]);

