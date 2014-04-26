marvelAppServices.factory('MarvelService', function ($resource) {
  return $resource('http://gateway.marvel.com/v1/public/characters/:id', { id: '@id', "ts": api.ts, "apikey": api.key, "hash": api.hash }, {
    update: { method: 'PUT' }
  });
});
