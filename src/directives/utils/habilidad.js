function habilidad() {
	return {
		scope: {
			title: '@',
			skills: '='
		},
		controller: function($scope) {

		},
		template: `
		<style>
			.skills__content .panel .panel-heading {
				border-bottom: 1px solid #fb9902;
			}
		</style>
		<div class="col-xs-4">
			<div class="panel">
			 	<div class="panel-heading">
			 		<span class="panel-title pull-left">
						{{title}}
		            </span>
			 		<button class="btn btn-link pull-right" ng-click="show = !show">
			 			<span class="glyphicon glyphicon-plus"></span>
			 		</button>
		 			<div class="clearfix"></div>
		 		</div>
		  		<ul class="list-group" ng-if="!show">
					<li class="list-group-item" 
						ng-repeat="skill in skills track by $index">
				  		{{skill}}
			  		</li>
				</ul>
			</div>
		</div>
		`
	}
}

module.exports = {
	name: 'habilidad',
	func: habilidad
};