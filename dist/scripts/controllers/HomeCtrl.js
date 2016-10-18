(function() {
    function HomeCtrl(Room) {
        this.roomData = Room;
        this.addRoom = function(chatRoomName) {
            this.roomData.add(chatRoomName)
        }
    }
    
    angular
        .module('blocChat')
        .controller("HomeCtrl", ['Room', HomeCtrl])
})();