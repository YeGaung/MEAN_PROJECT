var app = angular.module('fruitBasket', ['ngRoute', 'candidateControllers', 'candidateServices']);

app.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
      when('/candidates', {
        templateUrl: '/candidate-list.html',
        controller: 'candidateListCtr'
      }).when('/candidates/:candidateId', {
        templateUrl: '/candidate-details.html',
        controller: 'candidateListCtr'
      }).
      otherwise({
        redirectTo: '/candidates'
      });
  }]);

