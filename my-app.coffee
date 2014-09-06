app = angular.module 'TinyHabits', ['LocalStorageModule', 'ngRoute']

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.when('/user', {
    templateUrl: 'user.html',
    controller: 'UserInfoController'
  }).when('/habits', {
    templateUrl: 'habits.html',
    controller: 'HabitsInfoController'
  }).when('/log', {
    templateUrl: 'log.html',
    controller: 'HabitsLogController'
  }).otherwise({
    redirectTo: '/user'
  })
]

