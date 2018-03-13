'use strict';

angular
.module('myApp')
.controller('MyAccountCtrl', function($scope, MyAccountDB) {
    var vm = this;
    
    vm.user=MyAccountDB.getaccount();

    $scope.submit = function(user) {
        console.log(user);
        MyAccountDB.setaccount(user);
    }

})
.factory('MyAccountDB', function() {
    var myaccount = {};

    return {
        getaccount() {
            console.log('getter');
            return myaccount;
        },
        setaccount(user) {
            console.log('setter');
            if (user) {
                myaccount = user;
            };
        }
    };
});
