function cvAptitudes() {
	return {
		link: function($scope){},
		template: `
		<div class="education" id="education two">
	    	<cv-experiencia></cv-experiencia>

			<div class="education" id="education">

				<cv-lenguajes></cv-lenguajes>

				<cv-herramientas></cv-herramientas>

			</div>

	 		<div class="clearfix"> </div>

		</div>
		`
	}
}

module.exports = {
	name: 'cvAptitudes',
	func: cvAptitudes
};