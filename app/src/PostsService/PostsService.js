angular
  .module('UserApp')
  .factory('PostsService', function ($http, $timeout) {
    return {
      getPosts: function () {
        return $timeout(function() {
          return $http.get('https://jsonplaceholder.typicode.com/posts')
        }, 3000)
      }

    }
  }

)
