(function() {
    function HomeCtrl(Room) {
        this.roomData = Room;
    }
    
    angular
        .module('blocChat')
        .controller("HomeCtrl", ['Room', HomeCtrl])
})();