'use strict'

userApp.controller('UserDetailCtrl', function ($scope, $routeParams, UsersService) {
  $scope.userLoaded = false


  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data
    $scope.userLoaded = true
  })

  $scope.deleteUser = function (userId) {
    $scope.deletionError = false
    $scope.deletionSuccess = false

    UsersService.deleteUser(userId).then(function successCallback (response) {

      // Окей!
      $scope.deletionSuccess = true
    }, function errorCallback (response) {

      // Не окей..
      $scope.deletionError = true
    })
  };

  $scope.editUser = function (userId) {
    $scope.editionError = false;
    $scope.editionSuccess = false;
    UsersService.editUser(userId, $scope.user).then(function successCallback (response) {
      $scope.editionSuccess = true;
    }, function errorCallback (response) {
      $scope.editionError = false;
    })        
  };
})
