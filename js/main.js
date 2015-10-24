// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', [])

// Define a controller "mainController" for you application
sortApp.controller('mainController', function($scope, $http) {
	// Use and $http.get request to get the salary data
	$http.get('data/salaries.json').then(function(results) {
		// Set $scope.data equal to the data returned in your results
		$scope.data = results.data;
	})
});