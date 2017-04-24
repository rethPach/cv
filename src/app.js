var angular = require('angular');
var factory = require('./core/ModuleFactory');


factory.create(angular, {
	name: 'app',
	dependencies: [
		require('angular-bootstrap-npm')
	],
	directives: [
		require('./directives/cutParrafo'),
		require('./directives/cvMain'),
		require('./directives/cvNavigation'),
		require('./directives/cvAbout'),
		require('./directives/cvService'),
		require('./directives/cvExperiencia'),
		require('./directives/herramientaHelper'),
		require('./directives/cvLenguajes'),
		require('./directives/cvHerramientas'),
		require('./directives/cvAptitudes'),
		require('./directives/linkScroll')
	]
});