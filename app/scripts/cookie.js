(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'usernameModal.html',
                controller: function($uibModalInstance) {
                    this.newUsername = '';
                    this.close = function() {
                        $uibModalInstance.close();
                    }
                    this.create = function(username) {
                        if (username === '') {
                            alert("Username cannot be empty");
                        } else {
                            $cookies.put("blocChatCurrentUser", username);
                            this.close();
                        }
                    };
                },
                controllerAs: 'username'
            });
        }
    }
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();