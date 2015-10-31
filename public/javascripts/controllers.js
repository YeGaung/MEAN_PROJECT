'use strict';

/* Controllers */

/* Candidate Controllers Controllers */
  
var candidateControllers = angular.module('candidateControllers', []);

candidateControllers.controller('candidateListCtr', ['$scope', 'candidateList',
  function($scope, candidateList) {
	$scope.test = 'Hello World';
    //$scope.candidates = candidateList.getCandidateList();
	$scope.getCandidates = function(){
		console.log('getCandidates()');
		$scope.candidates = candidateList.getCandidateList();
      };

	}]);
	
	
/* Party Controllers Controllers */
  
var partyControllers = angular.module('partyControllers', []);

partyControllers.controller('partyListCtr', ['$scope', 'partyListService',
  function($scope, partyListService) {
	$scope.test = 'Hello World';
    
	$scope.getPartyList = function(){
		console.log('getPartyList()');
		$scope.partyList = partyListService.getPartyList();
      };

	}]);
	
	
	
/* FAQ Controllers Controllers */
  
var faqControllers = angular.module('faqControllers', []);

faqControllers.controller('faqListCtr', ['$scope', 'faqListService',
  function($scope, faqListService) {
	$scope.test = 'Hello World';
    //$scope.candidates = candidateList.getCandidateList();
	$scope.getFaqList = function(){
		console.log('getCandidates()');
		$scope.faqList = faqListService.getFaqList();
      };

	}]);