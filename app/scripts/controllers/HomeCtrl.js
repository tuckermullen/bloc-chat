(function() {
    function HomeCtrl(Room) {
        this.roomData = Room;
        this.addRoom = function(chatRoomName) {
            this.roomData.add(chatRoomName)
        }
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = Room.getMessages(this.selectedRoom.$id);
        }
    }
    
    angular
        .module('blocChat')
        .controller("HomeCtrl", ['Room', HomeCtrl])
})();