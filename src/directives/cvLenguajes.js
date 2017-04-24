function cvLenguajes() {

	return {
		link: function() {
			
		},
		template: `
		<div class="col-md-6 skills">
			<h3 class="w3l_head two">Lenguajes</h3>
	     	<div class="skill-agile">
				<div class='bar_group'>
					<div class='bar_group__bar thin elastic' label='HTML' value='70'></div>
					<div class='bar_group__bar thin elastic' label='CSS3' value='60'></div>
					<div 
						class='bar_group__bar thin elastic' 
						label='PHP/Javascript' 
						value='100'>
					</div>
					<div class='bar_group__bar thin elastic' label='Java' value='70'></div>
					<div class='bar_group__bar thin elastic' label='C#' value='80'></div>
				</div>
			</div>
		 </div>
		`
	}
}

module.exports = {
	name: 'cvLenguajes',
	func: cvLenguajes
};