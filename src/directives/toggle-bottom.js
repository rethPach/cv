function toogleBottom() {
	return {
		controller: function() {},
		template: `
		<style>
			.toogle-buttom {
				position: absolute;
				top: 10px;
				right: 10px;
			}
		</style>
		<button 
			ng-if="false"
			ng-click="toogleSidebar = !toogleSidebar"
			type="button" 
			class="btn btn-default toogle-buttom" aria-label="Left Align">
		  <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
		</button>
		`
	}
}

module.exports = {
	name: 'toogleBottom',
	func: toogleBottom
};