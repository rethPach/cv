function cvAptitudes() {
	return {
		link: function($scope){},
		template: `
		<div class="education" id="experiencia">
	    	
	    	<cv-experiencia></cv-experiencia>

			<div class="education" id="education">

				<cv-lenguajes></cv-lenguajes>

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