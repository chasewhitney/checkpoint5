var express = require('express');
var router = express.Router();
var Rental = require('../models/rentals.schema.js');



router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Rental.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});

router.delete('/:id', function(req, res) {
  console.log('delete with id: ', req.params.id);
  Rental.findByIdAndRemove(
    { _id: req.params.id},
    function(err, data) {
      if(err) {
        console.log('remove error: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from our Person model
  var addPost = new Rental(req.body);

  // insert into our collection
  addPost.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});



router.put('/:id', function(req,res){
  id = req.params.id;
  data = req.body;

  Rental.findByIdAndUpdate(
    {_id: id},
    {$set: {cost: data.rent, sqft: data.sqft, city: data.city} },
    function(err, data) {
      if(err) {
        console.log('remove error: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});


module.exports = router;
