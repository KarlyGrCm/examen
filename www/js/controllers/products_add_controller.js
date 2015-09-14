angular
  .module('starter')
  .controller('ProductsAddController', function($scope, Product, $state, $stateParams) {
    if($stateParams.id){
      $scope.title = 'Editar producto';
      $scope.product = Product.get({id: $stateParams.id});
    }
    else{
      $scope.title = 'Agregar producto';
      $scope.product = new Product();
    }

    $scope.addProduct = function(product) {
      if(product.id){
        product.$update(function(product){
          $state.go('tab.productos-mostrar', { id: product.id}, {reload: true});
          $window.location.reload(true);
        })
      }else{
        product.$save(function(product){
          $state.go('tab.productos-mostrar', { id: product.id}, {reload: true});
          $window.location.reload(true);
        });
      }

    }
  })
