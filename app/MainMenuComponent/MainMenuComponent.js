'use strict';

angular
.module('myApp')
.component('mainMenuComponent', {
    templateUrl: 'MainMenuComponent/MainMenuComponent.html',
    controller: function() {
        var vm = this;
        vm.items = [
            {id: 1, name: 'Todo 1', priority: 1},
            {id: 2, name: 'Todo 2', priority: 2},
            {id: 3, name: 'Todo 3', priority: 5}
        ];

        vm.itemPriorityChanged = function(item, priority) {
            console.log(priority);
        };
    }
});