angular
  .module('starter')
  .controller('UsersAddController', function($scope, User, $state, $stateParams) {
    if($stateParams.id){
      $scope.title = 'Editar cliente';
      $scope.user = User.get({id: $stateParams.id});
    }
    else{
      $scope.title = 'Agregar cliente';
      $scope.user = new User();
    }

    $scope.addUser = function(user) {
      if(user.id){
        user.$update(function(user){
          $state.go('tab.clientes-mostrar', { id: user.id}, {reload: true});
        })
      }else{
        user.$save(function(user){
          $state.go('tab.clientes-mostrar', { id: user.id}, {reload: true});
        });
      }

    }
  })
