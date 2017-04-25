function herramientaHelper() {
	return {
		scope: {
			herramientas: '@'
		},
		controller: function($scope){},
		template: `
		<p style="border-bottom: 1px solid rgba(251, 153, 2, .4); padding-bottom: 10px">
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