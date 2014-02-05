marvelAppControllers.controller('CharactersListCtrl', function ($scope, MarvelService) {
  $scope.paging = { offset: 0 };

  $scope.range = function (n) {
    return new Array(n);
  };

  $scope.page = function (page) {
    $scope.paging.offset = page * $scope.paging.limit;
    $scope.search();
  }

  $scope.search = function () {
    MarvelService.get({ "offset": $scope.paging.offset },
      function (response) {
        $scope.characters = response.data.results;

        $scope.paging = {
          total: response.data.total,
          limit: response.data.limit,
          offset: response.data.offset,
          count: response.data.count,
          pages: Math.ceil(response.data.total / response.data.limit),
          current: response.data.offset / response.data.limit + 1
        }
      },
      function(response) { // in case of issues
        console.log(response);
      }
    );
  }

  $scope.search();
});