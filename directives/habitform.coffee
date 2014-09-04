app.directive "habitform", () ->
  return {
    link: (scope, element, attrs) ->
      stats = scope.habit.stats[scope.currUTCdate]
      scope.habitValue = if stats then stats.status else null
      scope.updateValue = (event) ->
        newVal = event.target.value
        if (not scope.habit.stats[scope.currUTCdate])
          scope.habit.stats[scope.currUTCdate] = {}
        scope.habit.stats[scope.currUTCdate]["status"] = newVal
    restrict: "E",
    templateUrl: "form.html"
  }
