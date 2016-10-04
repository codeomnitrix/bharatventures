var  bvBsaApp = angular.module('bvBSA', ['ui.router', 'ui.bootstrap']);

bvBsaApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/templates/bsa_templates/bsa_home.html',
			controller: 'dashboardCtrl'
		})
		.state('step1', {
			url: '/step1',
			templateUrl: '/templates/bsa_templates/bsa_step1.html', 
			controller: 'step1Ctrl'
		});
});

