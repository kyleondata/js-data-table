var app = angular.module('myapp',[]);

app.controller('greetMe', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.controller('dataCtrl', function ($scope, $http, $window) {
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function (response) {
		console.log(response);
		$scope.users = response;
	});
});

// var root = 'http://jsonplaceholder.typicode.com/posts';

// $.ajax({
//   url: root,
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });

