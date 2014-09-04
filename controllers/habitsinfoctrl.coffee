app.controller 'HabitsInfoController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  ($scope, localStorageService, currUTCdate) ->
    defaultHabit =
      description: ""
      stats: {}

    $scope.newHabit = defaultHabit
    $scope.habits = localStorageService.get "habits" || []
    $scope.addHabit = () ->
      if ($scope.newHabit)
        console.log $scope.newHabit
        $scope.habits.push $scope.newHabit
        localStorageService.set "habits", $scope.habits
        $scope.newHabit = defaultHabit

    $scope.deleteHabit = (index) ->
      $scope.habits.splice index, 1
      localStorageService.set "habits", $scope.habits
]

