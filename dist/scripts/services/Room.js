(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var messagesRef = firebase.database().ref().child('messages').orderByChild('roomId');
    
      return {
          all: rooms,
          add: function(chatRoomName) {
              rooms.$add({name: chatRoomName})
          },
          messages: [],
          getMessages: function(roomId) {
            var messages = $firebaseArray(messagesRef);
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();