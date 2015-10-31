app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
	books.success(function(data) {
		
		$scope.book = data[$routeParams.bookId];
		$scope.chapter = $scope.book.chapters[$routeParams.chapterId];

		// If there no more chapters left, go back to the bookshelf view
		if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
			$scope.nextChapterIndex = "#";
		} else if ($routeParams.chapterId == "0") {
			$scope.prevChapterIndex = "#/books/" + $routeParams.bookId;
		} else {
			$scope.prevChapterIndex = "#/books/" + $routeParams.bookId + "/chapters/" + ($routeParams.chapterId - 1);
		}

	});

	// Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
	$scope.currentBookIndex = parseInt($routeParams.bookId);
	$scope.currentChapterIndex = parseInt($routeParams.chapterId);
	$scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
