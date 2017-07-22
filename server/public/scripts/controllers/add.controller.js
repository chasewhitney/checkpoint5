myApp.controller("AddController", function($http){
  console.log('AddController loaded');
  var ac = this;


  ac.addPost = function(money, sqft, city, type){
    ac.posting = {};
    if(type == "listing"){
      ac.posting.cost = money;
      ac.posting.sqft = sqft;
      ac.posting.city = city;

      $http.post('/listings', ac.posting).then(function(response){
        console.log('put listing response:', response);

      });

    } else {
      ac.posting.rent = money;
      ac.posting.sqft = sqft;
      ac.posting.city = city;

      $http.post('/rentals', ac.posting).then(function(response){
        console.log('put rental response:', response);

      });

    }

    console.log('ac.posting is:', ac.posting);


  };

});
