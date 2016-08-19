'use strict';

angular.module('app')
  .controller('mainCtrl', function(movieService){

  var vm = this;
  vm.displayList = movieService.getMovieList();

  console.log('hello');

}]);
