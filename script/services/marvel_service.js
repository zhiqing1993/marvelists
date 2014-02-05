marvelAppServices.factory('MarvelService', function ($resource) {
  return $resource('http://gateway.marvel.com/v1/public/characters/:id', { id: '@id', "apikey": api.key }, {
    update: { method: 'PUT' }
  });
});
