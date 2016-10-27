(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        var messagesRef = firebase.database().ref().child('messages').orderByChild('roomId');
        
        return {
            send: function(newMessage, roomId) {
                var message = {
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: timeFormat(),
                    roomId: roomId
                }
                messagesRef.$add(message);
            }
        };
        
        function timeFormat() {
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var dayOrNight = "AM";
            
            if (h > 12) {
                h -= 12;
                dayOrNight = "PM";
            }
            if (m < 10) {
                m = "0" + m;
            }
            if (s < 10) {
                s = "0" + s;
            }
            return h + ":" + m + " " + dayOrNightl
        }
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message])
})();