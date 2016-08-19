'use strict';

angular.module('app')
  .factory('movieService', ['$http', function ($http) {

  var getMovieList = function() {
    var movieData;
    $http.get('http://www.omdbapi.com/?s=' + search)
      .then(function(response) {
        movieData = response.data.Search;
      });
  };

});
