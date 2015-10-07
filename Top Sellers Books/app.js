var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) { 
	$scope.title = 'Top Sellers in Book';
	$scope.promo = 'JavaScript Programming Books';
  
	$scope.products = 
	[
		{
			name: 'JavaScript: The Good Parts', 
			price: 25, 
			pubdate: new Date('2008', '04', '01'), 
			cover: 'http://akamaicovers.oreilly.com/images/9780596517748/lrg.jpg',
		likes: 0,
		dislikes: 0
		},
		{
			name: 'JavaScript: The Definitive Guide, 6th Edition', 
			price: 42, 
			pubdate: new Date('2011', '03', '01'), 
			cover: 'http://akamaicovers.oreilly.com/images/9780596805531/lrg.jpg',
		likes: 0,
		dislikes: 0
		},
		{
			name: 'AngularJS: Up and Running', 
			price: 34, 
			pubdate: new Date('2014', '08', '01'), 
			cover: 'http://akamaicovers.oreilly.com/images/0636920033486/lrg.jpg',
		likes: 0,
		dislikes: 0
		},
		{
			name: 'Introduction to JavaScript Object Notation', 
			price: 17, 
			pubdate: new Date('2015', '07', '01'), 
			cover: 'http://akamaicovers.oreilly.com/images/0636920041597/lrg.jpg',
		likes: 0,
		dislikes: 0
		}
	]
	
	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
		$scope.products[index].dislikes += 1;
	};

}]);