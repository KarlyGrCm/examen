angular
  .module('starter')
  .controller('ProductsController', function($scope, Product){
    $scope.products = Product.query();
  });
