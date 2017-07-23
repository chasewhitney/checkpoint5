console.log('js sourced');

var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider){
  // define our routes, point them at a controllers
  $routeProvider
    .when('/listings', {
      controller: 'ListingsController as lc',
      templateUrl: 'views/templates/listings.html'
    })
    .when('/rentals', {
      controller: 'RentalsController as rc',
      templateUrl: 'views/templates/rentals.html'
    })
    .when('/add', {
      controller: 'AddController as ac',
      templateUrl: 'views/templates/add.html'
    })
    .otherwise({
      redirectTo: '/listings'
    });

});
