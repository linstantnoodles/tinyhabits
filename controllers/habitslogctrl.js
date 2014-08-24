app.controller('HabitsLogController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  function($scope, localStorageService, currUTCdate) {

    $scope.currUTCdate = currUTCdate;

    $scope.habits = localStorageService.get("habits") || [];

    $scope.habitHistory = null;

    $scope.$watch("habits", function(newVal, oldVal) {
      localStorageService.set("habits", $scope.habits);
    }, true);

    $scope.showHistory = function(index) {
      $scope.habitHistory = $scope.habits[index];
    };

}]);

