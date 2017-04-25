function cvService() {
	return {

		link: function($scope) {

			$scope.title = "Lo que puedo Aportar.";
			$scope.subtitle = "Comenzemos.";
			$scope.sections = {

				porQueContratarme : [

					[
						'La deuda técnica es algo que suele pagarse muy caro. El Mayor aporte',
						'qué puedo ofrecerle a un equipo es la reducción de la deuda técnica',
						'aportando soluciones software fáciles de Mantener, Reutilizar y Escalar.'
					].join(' '),

				],


				workflow: [

					[
						'Nunca reinventó la rueda.', 
						'Sigo fielmente las metodologías; SCRUM y eXtreme Programing', 
						'combinado éstas con ATDD.'
					].join(' '),

					[
						'Redacto historias de usuario y criterios de aceptación.',
						'usando Gerkin languaje.',
					].join(' '),

					[
						'Implementó eXtreme programing:',
						'TDD y todo lo que envuelve el concepto de código fácil de testear;',
						'SOLID, GRASP, Funciones de orden superior, Patrones de diseño,',
						'Arquitectura hexagonal, Refactoring.'
					].join(' '),


				],

				objetivos: [

					[
						'Lograr un impacto en el paradigma que actualmente el sector tic', 
						'tiene sobre el software,  generando soluciones reales para personas reales,', 
						'implementando las mejores metodologías.'
					].join(' '),


				]

			}

			$scope.resumen = {

				porQueContratarme: $scope.sections.porQueContratarme.join(' '),
				workflow: $scope.sections.workflow.join(' '),
				objetivos: $scope.sections.objetivos.join(' '),

			}

		},

		template: `
		<style>
			h3.w3l_head.two {
				color: #fb9902;
			}

			#services p.w3ls_head_para {
				color: white;
				text-shadow: 1px 1px black;
			}

			.list-gds h4 {
				color: #fb9902;
			}
		</style>
		<div class="service" id="services">
	    	<div class="container">
		 		<h3 class="w3l_head two">{{title}}</h3>
				<p class="w3ls_head_para">{{subtitle}}</p>
	    		<div class="service-agileits">
					<div class="col-md-4 list-gds text-center">
						<i class="fa fa-cog" aria-hidden="true"></i>
						<h4>Por que contrarme</h4>
						<p>
							<cut-parrafo
								titulo="{{'Por que contrarme'}}"
								parrafo="sections.porQueContratarme"
								resumen="resumen.porQueContratarme" 
								limite="300">	
							</cut-parrafo>
						</p>
					</div>
					<div class="col-md-4 list-gds text-center">
						<i class="fa fa-laptop" aria-hidden="true"></i>
						<h4>Workflow</h4>
						<p>
							<cut-parrafo
								titulo="{{'Workflow'}}"
								parrafo="sections.workflow"
								resumen="resumen.workflow" 
								limite="220">	
							</cut-parrafo>
						</p>
					</div>
					<div class="col-md-4 list-gds text-center">
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
						<h4>Objetivos</h4>
						<p>
							<cut-parrafo
								titulo="{{'Objetivos'}}"
								parrafo="sections.objetivos"
								resumen="resumen.objetivos" 
								limite="300">	
							</cut-parrafo>
						</p>
					</div>		
		 		</div>
	  		</div>
	 	</div>
		`


	}
}

module.exports = {
	name: 'cvService',
	func: cvService
};