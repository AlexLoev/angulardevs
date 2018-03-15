'use strict';

angular
.module('myApp')
.controller('MyAccountCtrl', function($scope, MyAccountDB) {
    var vm = this;

    vm.user = MyAccountDB.getaccount();
    
    $scope.submit = function() {
        MyAccountDB.setaccount(vm.user);
    }

})
.factory('MyAccountDB', function() {
    var myaccount = {};

    return {
        getaccount() {
            return myaccount;
        },
        setaccount(user) {
            if (user) {
                myaccount = user;
            };
        }
    };
});
