app.controller('UserInfoController', [
  "$scope",
  "localStorageService",
  "currUTCdate",
  function($scope, localStorageService, currUTCdate) {

  var defaultUser = {
    name: "",
    age: "",
    bio: "",
    date_joined: currUTCdate
  };

  $scope.user = localStorageService.get("user") || defaultUser;

  $scope.saveUser = function() {
    console.log($scope.user);
    localStorageService.set("user", $scope.user);
  };

  $scope.resetUser = function() {
    localStorageService.remove("user");
    $scope.user = defaultUser;
  };

  $scope.userExists = function() {
    return (localStorageService.get("user")) ? true : false;
  };

  $scope.hideGreeting = function() {
    if (localStorageService.get("user")) {
      return !angular.equals(localStorageService.get("user"), $scope.user);
    } else {
      return true;
    }
  };

}]);

