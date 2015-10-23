app.directive('tvShow', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'tvShow.html'
	};
});
