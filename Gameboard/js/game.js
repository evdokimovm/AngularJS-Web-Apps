app.directive('game', function() { 
	return { 
		restrict: 'E', 
		scope: { 
			info: '=' 
		}, 
		templateUrl: 'game.html'
	}; 
});
