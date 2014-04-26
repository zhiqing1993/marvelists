marvelAppControllers.controller('ComicCtrl', function ($scope, $routeParams, MarvelService) {
  MarvelService.get({ id: $routeParams.id }, 
    function (response) {
      $scope.comics = response.data.results[0];
      $scope.columns = 0;
      if ($scope.comics.items.length > 0) $scope.columns++;
//      if ($scope.character.series.items.length > 0) $scope.columns++;
//      if ($scope.character.events.items.length > 0) $scope.columns++;
//      if ($scope.character.stories.items.length > 0) $scope.columns++;
    },
    function(response) { // in case of issues
      console.log(response);
    }
  );
});
