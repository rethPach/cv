function descripcionExperiencia() {
	return {
		scope: {
			parrafos: '=' 
		},
		controller: function($scope) {

		},
		template: `
		<p ng-repeat="parrafo in parrafos">
			{{parrafo}}
		</p>
		`
	}
}

module.exports = {
	name: 'descripcionExperiencia',
	func: descripcionExperiencia
}; 