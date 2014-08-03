app.controller('HabitsLogController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  function($scope, localStorageService, currUTCdate) {

    $scope.currUTCdate = currUTCdate;

    $scope.habits = localStorageService.get("habits") || [];

    $scope.habitHistory = null;

    for (var i = 0; i < $scope.habits.length; i++) {
      if (!$scope.habits[i].stats[currUTCdate]) {
        $scope.habits[i].stats[currUTCdate] = {
          status: ""
        };
      }
    }

    $scope.$watch("habits", function(newVal, oldVal) {
      localStorageService.set("habits", $scope.habits);
    }, true);

    $scope.showHistory = function(index) {
      $scope.habitHistory = $scope.habits[index];
    };

}]);

