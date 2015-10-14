app.directive('feedsterPost', function() { 
	return { 
		restrict: 'E', 
		scope: { 
			post: '='
		}, 
		templateUrl: 'feedsterPost.html'
	}; 
});
