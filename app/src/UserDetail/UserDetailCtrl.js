'use strict';

userApp.component('userDetail', {

    controller: function UserDetailCtrl($routeParams, UsersService) {
        const ctrl = this;
        ctrl.userLoaded = false;
    
        ctrl.user = UsersService.get({
            userId: $routeParams['userId']
        }, function(successResult) {
            // Окей!
            ctrl.notfoundError = false;
            ctrl.userLoaded = true;
    
            ctrl.activeTab = 0;
            
        }, function(errorResult) {
            // Не окей..
            ctrl.notfoundError = true;
            //this.userLoaded = true;
    
    
        });
    
        ctrl.user.$promise.then(function(result) {
            //this.userLoaded = true;
        });
    
        ctrl.deleteUser = function(userId) {
    
            ctrl.user.$delete({
                userId: userId
            }, function(successResult) {
                // Окей!
                ctrl.deletionSuccess = true;
                ctrl.disableControlTab = true;
            }, function(errorResult) {
                // Не окей..
                ctrl.deletionError = true;
            });
    
        }
    
    },
    templateUrl: './src/UserDetail/UserDetail.html'
});
