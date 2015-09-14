angular
  .module('starter')
  .controller('UsersDetailsController', function($scope, User, $stateParams, $state) {
    $scope.user = User.get({id:$stateParams.id});

    $scope.deleteUser = function(user){

      user.$delete(function(user){
        $state.go('tab.clientes', null, {reload: true});
      })

    }
  })
