
    var demo = angular.module('demo', ['ngAnimate']);
	demo.controller('ctrl', function($scope) {
		$scope.gender_type = 'male name';
		$scope.pronoun = 'he';
		$scope.possess_pronoun = 'his';
		$scope.name = 'Male Name';
		$scope.words_ui = 'show';
		$scope.change = function() {
			$scope.pronoun = 'she';
			$scope.possess_pronoun = 'her';
			$scope.name = 'Female Name';
		};
		$scope.submit = function() {
			$scope.words_ui = 'hidden';
		};
		$scope.start_over = function() {
			$scope.words_ui = 'show';
		};
	});

