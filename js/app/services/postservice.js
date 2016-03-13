'use strict';

app.factory("PostService",['$http', function($http){
    return {
		findAll: function(){
			return $http.get('data/posts.json')
			.then(function(response){
				var posts = [];
				for (var i = 0; i < response.data.length; i++) {
					var item = response.data[i];
					item['createdAt'] = new Date(item['createdAt']);
					item['name'] = item['title'].replace(/\s+/g, '-').toLowerCase();
					posts.push(item);
					console.log("post='"+item.title+"'");
				}
				return posts;
			});
		},
		findByTitle: function(id){
			return $http.get("data/posts.json")
			.then(function(response){
				var post = {};
				for (var i = 0; i < response.data.length; i++) {
					var item = response.data[i];
					if(item.id === id){
						item['createdAt'] = new Date(item['createdAt']);
						item['name'] = item['title'].replace(/\s+/g, '-').toLowerCase();
						post=item;
					}
				}
				return post;
			});
		},
		search: function(title){
			return $http.get("data/posts.json")
			.then(function(response){
				var results= [];
				for (var i = 0; i < response.data.length; i++) {
					var item = response.data[i];
					if(item.title.toLowerCase().indexOf(title.toLowerCase())){
						item['createdAt'] = new Date(item['createdAt']);
						results.push(item);
					}
				}
				return results;
			});
		}
	};
}]);