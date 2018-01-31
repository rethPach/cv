var angular = require('angular');
var factory = require('./core/ModuleFactory');
var loaderState = require('./core/LoaderState');

factory.create(angular, {
	name: 'app',
	dependencies: [
		require('angular-ui-bootstrap'),
		require('angular-ui-router')
	],
	directives: [
		require('./directives/hola-mundo'),
		require('./directives/toggle-bottom'),
	],
	factories: [
		require('./services/ticket-http')
	],
	run: function($state) {
		$state.go('main.usuario-list');
	},
	config: function($stateProvider) {
		var states = [
			require('./states/layouts/main'),
			require('./states/usuarios/usuario-list'),
		];

		loaderState.load(states, $stateProvider);
	}
});