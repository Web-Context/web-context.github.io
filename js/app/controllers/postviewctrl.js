'use strict';

app.controller("PostViewCtrl", ['$scope', '$routeParams','PostService', function($scope, $routeParams, PostService){
	PostService.findByTitle($routeParams.title).then(function(data){
		$scope.post = data;
	});
}]);