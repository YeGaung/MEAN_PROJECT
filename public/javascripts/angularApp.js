var app = angular.module('fruitBasket', 
						['ngRoute', 
						'candidateControllers', 
						'candidateServices', 
						'partyControllers', 
						'partyServices', 
						'faqControllers', 
						'faqServices']
		);

app.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
      when('/candidates', {
        templateUrl: '/candidate-list.ejs',
        controller: 'candidateListCtr'
      }).
      when('/partyList', {
        templateUrl: '/party-list.ejs',
        controller: 'partyListCtr'
      }).
      when('/faq', {
        templateUrl: '/FAQ.ejs',
        controller: 'faqListCtr'
      }).otherwise({
        redirectTo: '/candidates'
      });
  }]);

