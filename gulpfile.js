var elixir = require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.assetsPath = '';
elixir.config.css.folder = '';
elixir.config.js.folder = '';

elixir(function(mix) {

	mix

		.styles([
			'dist/css/bootstrap.css',
			'dist/css/style.css',
			'dist/css/cm-overlay.css',
			'dist/css/font-awesome.css',
		], 'dist/vendors/template.css')

		.browserify('app.js', 'dist/js/app.js', 'src');
		
});