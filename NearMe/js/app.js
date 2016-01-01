var app = angular.module('NearMeApp', ['ngRoute', 'leaflet-directive']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'main.html'
	})
	.when('/about', {
		controller: 'AboutController',
		templateUrl: 'about.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});
