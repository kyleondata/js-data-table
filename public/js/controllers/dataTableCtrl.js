app.controller('dataCtrl', function ($scope, $http, $window) {

  $http.get("http://jsonplaceholder.typicode.com/posts")
  .success(function (response) {
    $scope.users = response;
  });

 
  // $scope.colName = ['user.userId', 'user.id'];
  $scope.colName = 'user.userId';
  $scope.reverseCol  = false;

});

// console.log($scope.users.userId);




// var root = 'http://jsonplaceholder.typicode.com/posts';

// $.ajax({
//   url: root,
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });