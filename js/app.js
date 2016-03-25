var madLibs = angular.module('madLibs', ['ngAnimate']);
	madLibs.controller('ctrl', function($scope) {
		
		$scope.words_ui = 'show';

		$scope.changeMale = function() {
			$scope.gender = 'Male Name';
			$scope.pronoun = 'he';
			$scope.possess_pronoun = 'his';
			$scope.name = 'Male Name';
		};

		$scope.changeFemale = function() {
			$scope.gender = 'Female Name';
			$scope.pronoun = 'she';
			$scope.possess_pronoun = 'her';
			$scope.name = 'Female Name';
		};

		$scope.submit = function() {
			$scope.words_ui = 'hidden';
			$scope.bool = true;
		};

		$scope.start_over = function() {
			$scope.bool = false;
			$scope.words_ui = 'show';
			document.getElementById("form").reset();
		};
});

