/* Controller retreives sorts json data */

app.controller('dataCtrl', function ($scope, $http, $window) {

  $http.get('http://jsonplaceholder.typicode.com/posts')
    .success(function (response) {
      $scope.users = response;
    })
    .catch(function (data) {
      console.log('Data could not be retrieved')
    });

  $scope.colName = 'userId';
  $scope.reverseCol = false;

  $scope.show = function (arg) {
    $scope.divShow = arg;
  };

});

app.directive('myPanel', function () {
  return {
    transclude: true,
      scope: {
      title: '@'
      },
    templateUrl: '../../views/my-panel.html'
  };
});

