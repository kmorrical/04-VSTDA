
(function() {
   'use strict';

   angular
       .module('app')
       .controller('HomeController', HomeController);

   HomeController.$inject = [];

   function HomeController() {
       var vm = this;

       var cssMap = {
        3: 'list-group-item-info',
        2: 'list-group-item-warning',
        1: 'list-group-item-danger'
       }

       vm.getclass = function(post) {
        return cssMap[post.priority];
       }

       vm.posts = [];

       var sortArray = ['text','priority', '-priority'];

       var sortTodos =function(order) {
          vm.sortCategory = sortArray[order];
       }

       vm.addPost = addPost;

       

      

       

       //////////////////////

       function addPost() {
           if (vm.newPriority) {
               vm.posts.push({
                   text: vm.newPost,
                   priority: vm.newPriority
               });
           } else {
               alert ('please choose a priority.');
           }

       };

   }
})();