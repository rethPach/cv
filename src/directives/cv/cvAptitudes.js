function cvAptitudes() {
	return {
		link: function($scope){},
		template: `
		<style>
			h3.w3l_head.two {
				text-shadow: 1px 1px black;
			}
		</style>
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