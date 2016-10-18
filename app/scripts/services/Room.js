(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
      return {
          all: rooms,
          add: function(chatRoomName) {
              rooms.$add({name: chatRoomName})
          },
          getMessages: function(roomId) {
            return $firebaseArray.child('messages').orderByChild('roomId').equalTo(roomId);
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();