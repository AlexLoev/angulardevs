angular
.module('UserApp')
.factory('UsersService', function($http, $timeout) {

        return {

            getUsers: function() {

                return $timeout(function() {
                    return $http.get('https://jsonplaceholder.typicode.com/users/')
                }, 1000);
            },

            getUser: function(userId) {
                return $http.get('https://jsonplaceholder.typicode.com/users/' + userId);
            },

            createUser: function(userData) {
                return $http({
                    method: 'POST',
                    url: 'https://jsonplaceholder.typicode.com/users/',
                    data: userData
                });
            },
            editUser: function(userId, userData) {
                return $http({
                    method: 'PUT',
                    url: 'https://jsonplaceholder.typicode.com/users/' + userId,
                    data: userData
                });
            },
            deleteUser: function(userId) {
                return $http({
                    method: 'DELETE',
                    url: 'https://jsonplaceholder.typicode.com/users/' + userId
                });
            }
        }

    }

);