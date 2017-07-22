myApp.controller("RentalsController", function($http){
  console.log('Rentals Controller loaded');
  var rc= this;

  rc.rentals = [];

  getRentals();


  function getRentals(){
    console.log('in getRentals');
    $http.get('/rentals').then(function(response){
      console.log('get response:', response);
      rc.rentals = response.data;
      console.log('rc.rentals is:', rc.rentals);
    });


  }


});
