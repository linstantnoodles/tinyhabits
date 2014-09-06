app.controller 'HabitsLogController', [
  '$scope',
  'localStorageService',
  'currUTCdate',
  ($scope, localStorageService, currUTCdate) ->
    $scope.currUTCdate = currUTCdate
    $scope.habits = localStorageService.get 'habits' || []
    $scope.habitHistory = null
    $scope.$watch('habits', (newVal, oldVal) ->
      (localStorageService.set 'habits', $scope.habits)
    , true)
    $scope.showHistory = (index) ->
      $scope.habitHistory = $scope.habits[index]
]

