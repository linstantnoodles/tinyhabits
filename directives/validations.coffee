app.directive "integer", () ->
  return {
    require: "ngModel",
    link: (scope, element, attrs, ctrl) ->
      ctrl.$parsers.unshift (val) ->
        if (isFinite(val))
          ctrl.$setValidity "integer", true
        else
          ctrl.$setValidity "integer", false
  }
