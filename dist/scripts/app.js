(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
        });
      }
    
    (function() {
        function BlocChatCookies($cookies, $uibModal) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            if (!currentUser || currentUser === '') {
                $uibModal.open({
                    templateUrl: 'usernameModal.html',
                    controller: function($uibModalInstance) {
                        this.newUsername = '';
                        this.create = function(username) {
                            $uibModalInstance.close(this.newUsername);
                        };
                    }
                });
            }
        }
    });

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();
