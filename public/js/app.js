var app = angular.module('myapp',[]);

app.controller('greetMe', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.controller('dataCtrl', function ($scope, $http, $window) {

	$http.get("http://codeforamerica.org/api/organizations/Code-for-San-Jose/projects?per_page=999")
	.success(function (response) {$scope.users = response.objects;});

});