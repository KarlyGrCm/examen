angular
  .module('starter')
  .controller('ProductsDetailsController', function($scope, Product, $stateParams, $state) {
    $scope.product = Product.get({id:$stateParams.id});

    $scope.deleteProduct = function(product){

      product.$delete(function(product){
        $state.go('tab.productos', null, {reload: true});
      })

    }
  })
