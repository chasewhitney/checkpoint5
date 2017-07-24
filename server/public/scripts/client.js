console.log('js sourced');

var myApp = angular.module("myApp", []);

myApp.controller("MessagesController", function($http){
  console.log('Messages Controller loaded');
  var mc = this;
  mc.messages = [];

  getMessages();

  function getMessages(){
    // Gets data from Listings collection
    console.log('in getMessages');
    $http.get('/messages').then(function(response){
      console.log('get response:', response);
      mc.messages = response.data;
      console.log('mc.messages is:', mc.messages);
    });
  }


  mc.newMessage = function(name, message){
    console.log('in newMessage with:', name, message);
    mc.new = {};
    mc.new.name = name;
    mc.new.message = message;
    $http.post('/messages', mc.new).then(function(response){
      console.log('put message response:', response);
    });
    getMessages();

  };

});
