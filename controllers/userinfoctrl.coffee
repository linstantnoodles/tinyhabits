app.controller 'UserInfoController', [
  '$scope',
  'localStorageService',
  'currUTCdate',
  ($scope, localStorageService, currUTCdate) ->
    defaultUser =
      name: ''
      age: ''
      bio: ''
      date_joined: currUTCdate

    $scope.user = (localStorageService.get 'user') || defaultUser;

    $scope.saveUser = () ->
      console.log $scope.user
      localStorageService.set 'user', $scope.user

    $scope.resetUser = () ->
      localStorageService.remove 'user'
      $scope.user = defaultUser

    $scope.userExists = () ->
      if (localStorageService.get 'user') then true else false

    $scope.hideGreeting = () ->
      if localStorageService.get 'user'
        not angular.equals (localStorageService.get 'user'), $scope.user
      else
        true
];

