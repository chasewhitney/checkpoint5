myApp.controller("ListingsController", function($http){
  console.log('Listings Controller loaded');
  var lc = this;
  lc.listings = [];
  lc.update = {};

  getListings();

  function getListings(){
    // Gets data from Listings collection
    console.log('in getListings');
    $http.get('/listings').then(function(response){
      console.log('get response:', response);
      lc.listings = response.data;
      console.log('lc.listings is:', lc.listings);
      for(i=0;i<lc.listings.length;i++){
        // sets value that determines whether image or update field is shown
        lc.listings[i].showUpdate = false;
      }
    });
  }

  lc.deleteListing = function(id) {
    // Removes listing from listings collection
    console.log('in deleteListing with id:', id);
    $http.delete('/listings/' + id).then(function(response){
      console.log('got delete response');
      getListings();
    });
  };

  lc.toggleUpdate = function(index){
    // Toggles whether image is show or update field is shown
    lc.listings[index].showUpdate = !lc.listings[index].showUpdate;
  };

  lc.updateListing = function(money, sqft, city, id, index){
    // Updates listing in collection
    lc.update.cost = money;
    lc.update.sqft = sqft;
    lc.update.city = city;
    console.log('in updateListing, sending updated:', lc.update);
    $http.put('/listings/' + id, lc.update).then(function(response){
      console.log('got response from update put');
      getListings();
      lc.listings[index].showUpdate = !lc.listings[index].showUpdate;
    });
  };
});
