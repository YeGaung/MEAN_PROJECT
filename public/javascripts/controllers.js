'use strict';

/* Controllers */

/* Party Controllers Controllers */
  
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