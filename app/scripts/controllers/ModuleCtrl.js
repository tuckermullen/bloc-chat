(function() {
    function ModuleCtrl(Room, $uibModal) {
        this.open = function(size, parentSelector) {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: function($uibModalInstance) {
              this.close = function() {
                  $uibModalInstance.close();
              }
              this.addRoom = function(roomName) {
                  Room.add(roomName);
                  this.close();
              }
          },
          controllerAs: 'module'
        });
    }
};
    
    angular
        .module('blocChat')
        .controller("ModuleCtrl", ['Room', '$uibModal', ModuleCtrl])
})();