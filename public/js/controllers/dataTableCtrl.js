
/* Controller retreives sorts json data */

app.controller('dataCtrl', function ($scope, $http, $window) {

  $http.get("http://jsonplaceholder.typicode.com/posts")
  .success(function (response) {
    $scope.users = response;
  });

  $scope.colName = 'userId';
  $scope.reverseCol  = false;

  $scope.show = function(arg) {
    $scope.divShow = arg;
  }

});




// Testing
// var root = 'http://jsonplaceholder.typicode.com/posts';
// $.ajax({
//   url: root,
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });