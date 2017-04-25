function experienciaHelper() {

	return {
		scope: {
			empresa: '@',
			duracion: '@',
			cargo: '@',
			works: '='
		},
		controller: function($scope) {
			$scope.show = false;
		},
		template: `
		<div class="education-agile-w3l">
			<div class="education-agile-w3l-year">
	       		<h4>{{empresa}}</h4>
	       		<h6>{{duracion}}</h6>
	     	</div>
		 	<div class="education-agile-w3l-info">
	     		<h4 class="education-agile-w3l-info__title">
	     			{{cargo}}
	     			<button 
	     				type="button"
	     				ng-click="show = !show" 
	     				class="btn btn-link glyphicon glyphicon-plus-sign pull-right">
				    </button>
     			</h4>
			   	<div class="education-agile-w3l-info" ng-if="show">
			   		<p ng-repeat="work in works">
			   			<descripcion-experiencia 
			   				parrafos="work.descripcion">
		   				</descripcion-experiencia>
			   			<herramienta-helper 
				   			herramientas="{{work.herramientas}}">
				   		</herramienta-helper>
			   		</p>
			   	</div>
	     	</div>
      		<div class="clearfix"></div>
	  	</div>
		`
	}
}

module.exports = {
	name: 'experienciaHelper',
	func: experienciaHelper
}