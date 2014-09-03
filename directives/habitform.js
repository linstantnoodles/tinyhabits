app.directive("habitform", function() {
  return {
    link: function(scope, element, attrs) {
      var stats = scope.habit.stats[scope.currUTCdate];
      scope.habitValue = (stats) ? stats.status : null;
      scope.updateValue = function(event) {
        var newVal = event.target.value;
        if (!scope.habit.stats[scope.currUTCdate]) {
          scope.habit.stats[scope.currUTCdate] = {};
        }
        scope.habit.stats[scope.currUTCdate]["status"] = newVal;
      };
    },
    restrict: "E",
    templateUrl: "form.html",
  };
});
