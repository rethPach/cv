function herramientaHelper() {
	return {
		scope: {
			herramientas: '@'
		},
		controller: function($scope){},
		template: `
		<p>
   			<strong>
				Herramientas y lenguajes usados: 
			</strong> 
			<span>
				{{ herramientas }}
			</span>
   		</p>
		`
	}
}

module.exports = {
	name: 'herramientaHelper',
	func: herramientaHelper
};