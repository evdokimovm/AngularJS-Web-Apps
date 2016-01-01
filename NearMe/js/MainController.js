app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.mapCenter = {};
	$http.get('http://ip-api.com/json')
		.success(function(data) {
			$scope.mapCenter.lat = data.lat;
			$scope.mapCenter.lng = data.lon;
			$scope.mapCenter.zoom = 17;

			$scope.markers = {
				main: {
					lat: data.lat,
					lng: data.lon,
					focus: true,
					message: "Your current city is " + data.city,
					draggable: false
				}
			}
		})
		.error(function(err){
			return err;
		});
}]);
