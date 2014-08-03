app.controller('HabitsLogController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  function($scope, localStorageService, currUTCdate) {

    $scope.currUTCdate = currUTCdate;

    $scope.habits = localStorageService.get("habits") || [];
    $scope.$watch("habits", function(newVal, oldVal) {
      localStorageService.set("habits", $scope.habits);
    }, true);

}]);

