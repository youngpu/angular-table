// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', []);


// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables

    // Use and $http.get request to get the salary data
    
        // Set $scope.data equal to the data returned in your results
sortApp.controller('mainController', function($scope, $http) {
    $http.get('data/salaries.json').then(function(response){
        $scope.data = response.data
        console.log($scope.data)
    })
   // $scope.sortType = '';
   // $scope.search = '';

})

