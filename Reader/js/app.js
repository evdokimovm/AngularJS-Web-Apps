var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/books', {
			controller: 'BookshelfController',
			templateUrl: 'bookshelf.html'
		})
		.when('/books/:bookId', {
			controller: 'BookController',
			templateUrl: 'book.html'
		})
		.when('/books/:bookId/chapters/:chapterId', {
			controller: 'ChapterController',
			templateUrl: 'chapter.html'
		})
		.otherwise({
			redirectTo: '/books'
		})
});
