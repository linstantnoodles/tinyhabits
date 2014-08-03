var app = angular.module("TinyHabits", [
    'LocalStorageModule',
    'ngRoute'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/user', {
      templateUrl: "user.html",
      controller: "UserInfoController"
    }).when('/habits', {
      templateUrl: "habits.html",
      controller: "HabitsInfoController"
    }).when('/log', {
      templateUrl: "log.html",
      controller: "HabitsLogController"
    }).otherwise({
      redirectTo: '/user'
    });
}]);

