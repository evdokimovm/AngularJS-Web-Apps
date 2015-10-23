app.factory('shows', ['$http', function($http) {
	return $http.get('data/shows.json')
		.success(function(data) { 
			return data; 
		})
		.error(function(err) { 
			return err; 
		})
}]);
