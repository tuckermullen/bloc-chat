(function() {
    function HomeCtrl(Room, Message) {
        this.roomData = Room;
        this.messageData = Message;
        this.addRoom = function(chatRoomName) {
            this.roomData.add(chatRoomName)
        }
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = this.roomData.getMessages(this.selectedRoom.$id);
        }
        
        this.sendMessage = function() {
            this.messageData.send(this.newMessage, this.selectedRoom.$id);
            this.newMessage = '';
        }
    }
    
    angular
        .module('blocChat')
        .controller("HomeCtrl", ['Room', 'Message', HomeCtrl])
})();