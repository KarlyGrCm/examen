angular
  .module('starter')
  .factory('User', function($resource) {
    return $resource(
      'https://sheltered-crag-3339.herokuapp.com/users/:id.json',
      //'http://localhost:3000/users/:id.json',
      {
        id: '@id'
      },
      {
        update: { method: 'PUT'}
      }
    );
  })
