
/* Controller opens and closes drop down from menu bar on click */

angular.module('myapp').controller('iconToolbar', ['$scope', function($scope) { 
  $scope.toolDrop = function() {
        $('.drop-down').toggleClass("open");
    };
}]);