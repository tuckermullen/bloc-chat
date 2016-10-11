(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
      var test = $firebaseArray(ref)
      console.log(test)
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();