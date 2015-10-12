app.directive('programListing', function(){
	return {
		restrict: 'E',
		scope:{
			listing: '='
		},
	templateUrl: 'programListing.html'
	};
});
