app.factory('events', ['$http', function($http) {
	return $http.get('data/events.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);
