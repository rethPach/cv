function cvLenguajes() {

	return {
		link: function($scope) {
			$scope.habilidades = [{
				title: 'PHP',
				skills: [
					'Laravel', 'Symfony','Codeigniter', 'Doctrine',
					'Composer', 'Cake'
				]
			}, {
				title: 'Javascript',
				skills: [
			 		'Angular', 'Backbone','Bower', 'Gulp',
				  	'Browserify', 'Node'
			  	]
			}, {
				title: 'C#',
				skills: [
			 		'Asp.net MVC 5','LINQ',
				  	'Entitie Framework','-',
				  	'-', '-' 
			  	]
			}, {
				title: 'Java',
				skills: [
			 		'JSP','Servlets','JSF',
				  	'JPA','Spring','-'
			  	]
			}, {
				title: 'Commons',
				skills: [
			 		'HTML','CSS','SQL',
				  	'Git', 'Linux','Apache'
			  	]
			}, {
				title: 'Metodologias',
				skills: [
			 		'SCRUM', 'eXtreme Programming', 
				  	'-', '-', '-', '-' 
			  	]
			}];
		},
		template: `
		<style>
			.skills {
				padding-top: 64px;
			}

			.skills__content {
				margin-top: 32px;
				padding: 0px 64px;
			}
			
			.panel {
				border-radius: 0px;
				border: 1px solid #064661;
				background: transparent;
			}

			.skills__content .panel .panel-heading {
				background: #064661;
				color: #fb9902;
			}

			.list-group li {
				font-size: .7em;
				color: #064661;
				background-color: #F3F3F3;
			}

			.panel-heading .panel-title {
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    line-height: normal;
			    width: 75%;
			    padding-top: 8px;
			}

		</style>
		<div class="col-md-12 skills" id="habilidades">

			<h3 class="w3l_head two">Habilidades</h3>
	     	
			<div class="row skills__content">
				
				<habilidad 
					ng-repeat="habilidad in habilidades"
					title="{{habilidad.title}}"
					skills="habilidad.skills">
				</habilidad>

		 	</div>

	 	</div>
		`
	}
}

module.exports = {
	name: 'cvLenguajes',
	func: cvLenguajes
};