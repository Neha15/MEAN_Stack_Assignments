var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/movies';

var movies = require('./movies');
var inter = require('./interface');
module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, function(err,db){
    inter.insert(db,movies,function(err,doc){
      if(err){
        console.log(err);
      }else{
        inter.byDirector(db,"George Lucas",function(err,doc){
          console.log(doc);
        });
      }
      db.close();
    });
  });
};
