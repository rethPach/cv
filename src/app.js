var angular = require('angular');
var factory = require('./core/ModuleFactory');

factory.create(angular, {
	name: 'app',
	dependencies: [
		require('angular-bootstrap-npm')
	],
	directives: [
	
		require('./directives/cv/cvMain'),
		require('./directives/cv/cvNavigation'),
		require('./directives/cv/cvAbout'),
		require('./directives/cv/cvService'),
		require('./directives/cv/cvExperiencia'),
		require('./directives/cv/cvFooter'),
		require('./directives/cv/cvLenguajes'),
		require('./directives/cv/cvAptitudes'),

		require('./directives/utils/cutParrafo'),
		require('./directives/utils/herramientaHelper'),
		require('./directives/utils/linkScroll'),
		require('./directives/utils/experienciaHelper'),
		require('./directives/utils/descripcionExperiencia'),
		require('./directives/utils/habilidad')
	]
});