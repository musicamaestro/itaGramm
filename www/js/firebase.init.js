angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {

    apiKey: "AIzaSyADKcdYdrcHbarC3B4UkL0McGkaTYcK0as",
    authDomain: "vidtutapp.firebaseapp.com",
    databaseURL: "https://vidtutapp.firebaseio.com",
    storageBucket: "vidtutapp.appspot.com"
   
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/