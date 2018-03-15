'use strict'

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {
  $scope.UsersLoading = true;
  $scope.PostsLoading = true;
  
  var userslist = UsersService.getUsers();
  
  var postlist = PostsService.getPosts();
  
  
  $q.all([userslist, postlist]).then(function(values) {
    console.log('promiseall');
    $scope.users = values[0].data;
    $scope.UsersLoading = false;
    $scope.posts = values[1].data
    $scope.PostsLoading = false;
  })


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
