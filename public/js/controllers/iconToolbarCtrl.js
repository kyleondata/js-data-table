app.controller('iconToolbar', ['$scope', function($scope) { 
  $scope.toolDrop = function() {
        $('.drop-down').toggleClass("open");
    };
}]);