// info: icon, titile, developer, price
app.directive('appInfo', function() { 
	return { 
		restrict: 'E', 
		scope: { 
			info: '=' 
		}, 
		templateUrl: 'appInfo.html'
	}; 
});

// buttons
app.directive('installApp', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'installApp.html',

	link: function(scope, element, attrs) {
		scope.buttonText = "Install",
		scope.installed = false,

	scope.download = function() {
		element.toggleClass('btn-active')
		if(scope.installed) {
			scope.buttonText = "Install";
			scope.installed = false;
		} else {
			scope.buttonText = "Uninstall";
			scope.installed = true;
		}
	}
}
};
});