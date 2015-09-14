angular
  .module('starter')
  .controller('UsersController', function($scope, User) {
    $scope.users = User.query();
  });
