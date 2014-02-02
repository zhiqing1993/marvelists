var marvelApp = angular.module('marvelApp', ['ngResource', 'ngRoute']);

marvelApp.marvelDomain = "http://gateway.marvel.com";
marvelApp.charactersUrl = "/v1/public/characters/:id";

marvelApp.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/characters', {
            templateUrl: '/view/characters.html',
            controller: 'CharactersListCtrl'
        });

        $routeProvider.when('/character/:id', {
            templateUrl: '/view/character.html',
            controller: 'CharacterCtrl'
        });
    }
]);

marvelApp.controller('MainCtrl', ['$scope', '$location',

    function ($scope, $location) {

        $location.path('/characters');
    }
]);

marvelApp.controller('CharactersListCtrl', ['$scope', '$resource',

    function ($scope, $resource) {

        $scope.paging = { offset: 0 };

        $scope.range = function (n) {

            return new Array(n);
        };

        $scope.page = function (page) {

            $scope.paging.offset = page * $scope.paging.limit;
            $scope.search();
        }

        var CharactersResource = $resource(marvelApp.marvelDomain + marvelApp.charactersUrl, { "apikey": api.key });

        $scope.search = function () {

            var CharactersResult = CharactersResource.get({"offset": $scope.paging.offset}, function () {

                $scope.characters = CharactersResult.data.results;
                $scope.paging = {

                    total: CharactersResult.data.total,
                    limit: CharactersResult.data.limit,
                    offset: CharactersResult.data.offset,
                    count: CharactersResult.data.count,
                    pages: Math.ceil(CharactersResult.data.total / CharactersResult.data.limit),
                    current: CharactersResult.data.offset / CharactersResult.data.limit + 1
                }
            });
        }

        $scope.search();
    }]);

marvelApp.controller('CharacterCtrl', ['$scope', '$resource', '$route',

    function ($scope, $resource, $route) {

        var CharacterResource = $resource(marvelApp.marvelDomain + marvelApp.charactersUrl, { "apikey": api.key });

        var CharacterResult = CharacterResource.get({id: $route.current.params.id}, function () {

            $scope.character = CharacterResult.data.results[0];

            $scope.columns = 0;

            if ($scope.character.comics.items.length > 0) $scope.columns++;
            if ($scope.character.series.items.length > 0) $scope.columns++;
            if ($scope.character.events.items.length > 0) $scope.columns++;
            if ($scope.character.stories.items.length > 0) $scope.columns++;
        });
    }]);
