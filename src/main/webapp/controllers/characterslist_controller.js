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
      function (data) {
        $scope.characters = data.results;

        $scope.paging = {
          total: data.total,
          limit: data.limit,
          offset: data.offset,
          count: data.count,
          pages: Math.ceil(data.total / data.limit),
          current: data.offset / data.limit + 1
        }
      },
      function(response) { // in case of issues
        console.log(response);
      }
    );
  }

  $scope.search();
});