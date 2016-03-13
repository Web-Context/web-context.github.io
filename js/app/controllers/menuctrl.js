'use strict';

app.controller("MenuCtrl", ["$scope","$http",function($scope,$http){
	$http.get("data/tags.json").success(function(data,status){
		$scope.tags=data;
	}).error(function(data,status){
		alert("unable to retrieve some tags from data");
	});
}]);
