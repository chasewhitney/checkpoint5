myApp.controller("RentalsController", function($http){
  console.log('Rentals Controller loaded');
  var rc= this;
  rc.rentals = [];
  rc.update = {};

  getRentals();

  function getRentals(){
    // Gets data from rentals collection
    console.log('in getRentals');
    $http.get('/rentals').then(function(response){
      console.log('get response:', response);
      rc.rentals = response.data;
      console.log('rc.rentals is:', rc.rentals);
      for(i=0;i<rc.rentals.length;i++){
        // sets value that determines whether image or update field is shown
        rc.rentals[i].showUpdate = false;
      }
    });
  }

  rc.deleteRental = function(id) {
    // Deletes listing from rentals collection
    console.log('in deleteRental with id:', id);
    $http.delete('/rentals/' + id).then(function(response){
      console.log('got delete response');
      getRentals();
    });
  };

  rc.toggleUpdate = function(index){
    // Toggles whether image is shown or update field is shown
    rc.rentals[index].showUpdate = !rc.rentals[index].showUpdate;
  };

  rc.updateRental = function(money, sqft, city, id, index){
    // Updates item in rentals collection
    rc.update.rent = money;
    rc.update.sqft = sqft;
    rc.update.city = city;
    console.log('in updateRental, sending updated:', rc.update);
    $http.put('/rentals/' + id, rc.update).then(function(response){
      console.log('got response from update put');
      getRentals();
      rc.rentals[index].showUpdate = !rc.rentals[index].showUpdate;
    });
  };
});
