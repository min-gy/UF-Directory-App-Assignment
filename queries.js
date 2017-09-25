/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  var libraryWestQuery = {"name":"Library West"}
  Listing.find(libraryWestQuery, function(err, data){
    if(err){
      throw err;
    }
    else{
      console.log(data);
    }
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  var cableQuery = {"code":"CABL"}
  Listing.find(cableQuery, function(err, data){
    if(err){
      throw err;
    }
    else{
      data.remove(function(err){
          console.log(docs);
      })
    }
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var phelpsQuery = {"name":"Phelps Laboratory"}
  Listing.findOneAndUpdate(phelpsQuery, {"address": "Phelp Lab's Correct Address"}, function(err, data){
    if(err){
      throw err;
    }
    else{
      console.log(data);
    }
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, data){
    if(err){
      throw err;
    }
    else{
      console.log(data);
    }
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
