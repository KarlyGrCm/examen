angular.module('starter', ['ionic', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab',{
    url: '/tab',
    abstract:true,
    templateUrl: 'templates/tab.html'
  })
  .state('tab.clientes',{
    url: '/clientes',
    views: {
    clientes: {
      templateUrl: 'templates/clientes/index.html',
      controller: 'UsersController'
      }
    }
  })
  .state('tab.clientes-agregar',{
    url: '/clientes/agregar',
    views: {
    clientes: {
      templateUrl: 'templates/clientes/agregar.html',
      controller: 'UsersAddController'
      }
    }
  })
  .state('tab.clientes-mostrar',{
    url: '/clientes/:id',
    views: {
    clientes: {
      templateUrl: 'templates/clientes/mostrar.html',
      controller: 'UsersDetailsController'
      }
    }
  })

  .state('tab.clientes-editar',{
    url: '/clientes/editar/:id',
    views: {
    clientes: {
      templateUrl: 'templates/clientes/agregar.html',
      controller: 'UsersAddController'
      }
    }
  })

  .state('tab.productos',{
    url: '/productos',
    views: {
    productos: {
      templateUrl: 'templates/productos/index.html',
      controller: 'ProductsController'
      }
    }
  })
  .state('tab.productos-agregar',{
    url: '/productos/agregar',
    views: {
    productos: {
      templateUrl: 'templates/productos/agregar.html',
      controller: 'ProductsAddController'
      }
    }
  })
  .state('tab.productos-mostrar',{
    url: '/productos/:id',
    views: {
    productos: {
      templateUrl: 'templates/productos/mostrar.html',
      controller: 'ProductsDetailsController'
      }
    }
  })
  .state('tab.productos-editar',{
    url: '/productos/editar/:id',
    views: {
    productos: {
      templateUrl: 'templates/productos/agregar.html',
      controller: 'ProductsAddController'
      }
    }
  })
  $urlRouterProvider.otherwise('/tab/clientes');
})
