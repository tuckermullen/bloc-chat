(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        var messagesRef = ref.orderByChild('roomId');
        
        function timeFormat() {
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var dayOrNight = "AM";
            
            if (hour > 12) {
                hour -= 12;
                dayOrNight = "PM";
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            return hour + ":" + min + " " + dayOrNight
        }
        
        return {
            send: function(newMessage, roomId) {
                var message = {
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: timeFormat(),
                    roomId: roomId
                }
                messages.$add(message);
            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message])
})();