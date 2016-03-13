'use strict';

app.controller("PostListCtrl", ['$scope', 'PostService', function($scope, PostService){
	PostService.findAll().then(function(data){
		$scope.posts = data;
	});
}]);