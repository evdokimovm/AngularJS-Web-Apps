var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider) {
		$routeProvider.
		when('/outbox', {
				controller: 'HomeController',
				templateUrl: 'home.html'
		})
		.when('/outbox/:id', {
				controller: 'EmailController',
				templateUrl: 'email.html'
		}).
		otherwise({
				redirectTo: '/outbox'
		});
});
