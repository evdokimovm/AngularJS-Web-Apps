var app = angular.module('CalendarApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'DayController',
			templateUrl: 'day.html'
		})
		.when('/:id', {
				controller: 'EventController',
				templateUrl: 'event.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});
