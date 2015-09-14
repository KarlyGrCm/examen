angular
  .module('starter')
  .factory('Product', function($resource) {
    return $resource(
      'https://sheltered-crag-3339.herokuapp.com/products/:id.json',
      //'http://localhost:3000/products/:id.json',
      {
        id: '@id'
      },
      {
        update: { method: 'PUT'}
      }
    );
  })
