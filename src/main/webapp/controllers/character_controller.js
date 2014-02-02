marvelAppControllers.controller('CharacterCtrl', function ($scope, $routeParams, MarvelService) {
  MarvelService.get({ id: $routeParams.id }, 
    function (data) {
      $scope.character = data.results[0];
      $scope.columns = 0;
      if ($scope.character.comics.items.length > 0) $scope.columns++;
      if ($scope.character.series.items.length > 0) $scope.columns++;
      if ($scope.character.events.items.length > 0) $scope.columns++;
      if ($scope.character.stories.items.length > 0) $scope.columns++;
    },
    function(response) { // in case of issues
      console.log(response);
    }
  );
});
