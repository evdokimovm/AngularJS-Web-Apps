var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: "HomeController",
			templateUrl: "home.html"
		})
		.when('/photos/:id', {
			controller: 'PhotoController',
			templateUrl: 'photo.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
