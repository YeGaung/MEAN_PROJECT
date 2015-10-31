'use strict';
  
/* Candidate Services */  
  var candidateServices = angular.module('candidateServices', ['ngResource']);

candidateServices.factory('candidateList', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/candidate/list?token=:token&_with=party&per_page=:page&party=:party', {}, {
		getCandidateList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77', page:200, party:60}}
		}
	);
  }]);
  
  
  
/* Party Services */  
  var partyServices = angular.module('partyServices', ['ngResource']);

partyServices.factory('partyListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/party?token=:token', {}, {
		getPartyList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77'}}
		}
	);
  }]);
  
  
/* FAQ Services */  
  var faqServices = angular.module('faqServices', ['ngResource']);

faqServices.factory('faqListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/faq/list?token=:token', {}, {
		getFaqList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77'}}
		}
	);
  }]);