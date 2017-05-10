function cvExperiencia() {
	return {
		link: function($scope, el) {
			$scope.experiencias = [{
				empresa: 'Medinet',
				duracion: 'Enero 2017 - Abril 2017',
				cargo: 'Fullstack-web developer team leader.',
				works: [{

					descripcion: [

						[
							'Desarrollo de aplicación Business Inteligence que mostraba el', 
				   			'tiempo laboral: efectivo, perdido, sobretiempo;',
				   			'de un empleado administrativo x en un rango tiempo x;',
				   			'acomplandome a un lector de tarjetas(Entrada/Salida).' 
						].join(' ')
					],

					herramientas: 'ASP.net MVC, C#, Angular js Como Capa de presentación.'
				}, {
					descripcion: [

						[
							'Desarrollo de un CMS Ecommerce con la integración de una', 
				   			'pasarela de pago (123Pago). El negocio consistía en venta de', 
				   			'boletos, control del inventario de boletos vendidos,', 
				   			'disponibles, ofertados y validación del boleto a través de un', 
				   			'código seguridad generado por la aplicación.'

						].join(' '),

						[
							'Proyecto legacy, donde aterrice y puse a prueba de', 
				   			'manera satisfactoria conceptos de refactoring.'
						].join(' '),

					],

					herramientas: 'Java, Javascript, Spring Framework, Angular Js como capa de presentación.'
				}]
			}, {
				empresa: 'Soluciones As',
				duracion: 'Mayo 2016 - Enero 2017',
				cargo: 'Fullstack-web developer team leader.',
				works: [{
					descripcion: [
						[
							'Desarrollo de una aplicación de venta de boletos sobre', 
				   			'eventos, para cliente en argentina. El negocio era bastante', 
				   			'similar al mencionado en la experiencia anterior,', 
				   			'con la particularidad que la validación del boleto', 
				   			'era a través de un app Mobile desarrollada con Ionic que', 
				   			'escaneaba un código Qr asociado a una entrada.',
				   			'Adicionalmente incluía una Session Bussiness Inteligence', 
				   			'que mostraba información relacionada a boletos vendidos,',
			   				'ofertados y disponibles para un evento,',
			   				'ademas de ofrecer control de asistencia.' 

						].join(' ')
					],

					herramientas: 'PHP, Javascript, Laravel 5,Angular Js como capa de presentación.'
				}]
			}, {
				empresa: 'Freelance',
				duracion: 'Febrero 2013 - Mayo 2016',
				cargo: 'Fullstack-web Developer.',
				works: [{
					descripcion: [
						[
							'Desarrollo de un ecommerce para venta y alquiler de', 
				   			'equipos para ferreteria y construcción'
						].join(' ')
					],
					herramientas: 'PHP, Javascript, Cake, Jquery.'
				}, {
					descripcion: [
						[
							'Desarrollo de help desk para la gestión de incidencias', 
				   			'dirigidas a un departamento de soporte técnico, asignación de', 
				   			'tickets para analistas implementando algoritmo round robin'
						].join(' ')
					],
					herramientas: 'PHP, Javascript, Codeigniter, JQuery UI.'
				}, {
					descripcion: [
						[
							'Desarrollo de una aplicación de mensajería interna,', 
				   			'gestor de memorándums y micronotas'
						].join(' ')
					],
					herramientas: 'PHP, Javascript, Codeigniter, JQuery UI.'
				}, {
					descripcion: [
						[
							'Desarrollo de una aplicación para la gestión de préstamos, y', 
				   			'solicitud de libros para una biblioteca.'
						].join(' ')
					],
					herramientas: 'PHP, Javascript, Codeigniter, JQuery UI.'
				}]
			}];
		},
		template: `
		<style>

			.divider {
				border-top: 1px solid #ddd;
			}

			.education-agile-w3l-info h4{
				color: #fb9902;
			}

			.education-agile-w3l-year h4 {
				color: #064661;
			}

			.education-agile-w3l-info__content {
				display: none;
			}
			
			.education-agile-w3l-info {
				float: left;
			}

			.education-agile-w3l {
				margin: 40px 0px;
			}

			h3.w3l_head.three {
				color: #064661
			}

			.education-agile-w3l-year {
				border-left: 1px solid #fb9902;
			}

			.education-agile-w3l-year h6 {
				color: #525252;
			}

			.btn-link {
				color: #064661;
			}
			
		</style>
		<div class="col-md-12 education-w3l">
			<h3 class="w3l_head three">Experiencia</h3>
			<div class="education-agile-grids">
				<experiencia-helper
					ng-repeat="experiencia in experiencias" 
					empresa="{{experiencia.empresa}}"
					duracion="{{experiencia.duracion}}"
					cargo="{{experiencia.cargo}}"
					works="experiencia.works">
				</experiencia-helper>
			</div>
		</div>
		`
	}
}

module.exports = {
	name: 'cvExperiencia',
	func: cvExperiencia
};