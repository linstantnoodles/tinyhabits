app.controller('HabitsInfoController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  function($scope, localStorageService, currUTCdate) {

    var defaultHabit = {
      description: "",
      stats: {}
    };

    $scope.newHabit = defaultHabit;
    $scope.habits = localStorageService.get("habits") || [];
    $scope.addHabit = function() {
      if ($scope.newHabit) {
        console.log($scope.newHabit);
        $scope.habits.push($scope.newHabit);
        localStorageService.set("habits", $scope.habits);
        $scope.newHabit = defaultHabit;
      }
    };
    $scope.deleteHabit = function(index) {
      $scope.habits.splice(index, 1);
      localStorageService.set("habits", $scope.habits);
    };
}]);

