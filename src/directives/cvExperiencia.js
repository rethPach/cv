function cvExperiencia() {
	return {
		link: function($scope) {

		},
		template: `
		<style>
			.divider {
				border-top: 1px solid #ddd;
			}
		</style>
		<div class="col-md-12 education-w3l">
			<h3 class="w3l_head three">Experiencia</h3>
			<div class="education-agile-grids">

				<div class="education-agile-w3l">
					<div class="education-agile-w3l-year">
			       		<h4>Mayo 2016 - Enero 2017</h4>
			       		<h6>MEDINET</h6>
			     	</div>
				 	<div class="education-agile-w3l-info">
			     		<h4>Fullstack-web developer team leader, scrum master padawan.</h4>
					   	<p>
					   		<p>
						   		<p>
						   			Desarrollo de aplicación Business Inteligence que mostraba el 
						   			tiempo laboral: efectivo, perdido, sobretiempo;
						   			de un empleado administrativo x en un rango tiempo x;
						   			acomplandome a un lector de tarjetas(Entrada/Salida). 		
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'ASP.net MVC, C#, Angular js Como Capa de presentación.'}}">
						   		</herramienta-helper>
						   	</p>
					   		<p class="divider"></p>
							<p>
						   		<p>
						   			Desarrollo de un CMS Ecommerce con la integración de una 
						   			pasarela de pago (123Pago). El negocio consistía en venta de 
						   			boletos, control del inventario de: boletos vendidos, 
						   			disponibles, ofertados; validación del boleto a través de un 
						   			código seguridad generado por la aplicación.
						   		</p>
						   		<p>
						   			Proyecto legacy, donde aterrice y puse a prueba de 
						   			manera satisfactoria conceptos de refactoring.
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'Java, Javascript, Spring Framework, Angular Js como capa de presentación.'}}">
						   		</herramienta-helper>
						   	</p> 
					   	</p>
			     	</div>
		      		<div class="clearfix"></div>
			  	</div>

			  	<div class="education-agile-w3l two">
					<div class="education-agile-w3l-year">
				       	<h4>Mayo 2016 - Enero 2017</h4>
				       	<h6>Soluciones AST</h6>
			     	</div>
				 	<div class="education-agile-w3l-info">
			       		<h4>Fullstack-web developer team leader, scrum master padawan.</h4>
					   	<p>
					   		<p>
					   			Desarrollo de una aplicación de venta de boletos sobre 
					   			eventos, para cliente en argentina. El negocio era bastante 
					   			similar al mencionado en la experiencia anterior, 
					   			con la particularidad que la validación del boleto 
					   			era a través de un app Mobile que desarrolle con Ionic esta 
					   			escaneaba un código Qr asociado a una entrada y Validadaba la entradada.
					   			Adicionalmente incluía una Session Bussiness Inteligence que mostraba 
					   			información relacionada a:
					   				boletos vendidos, 
					  				boletos ofertados y boletos disponibles.
					  				Reportes de asistencia para un evento.

					   		</p>
					   		<herramienta-helper 
					   			herramientas="{{'Javascript, Laravel 5,Angular Js como capa de presentación.'}}">
					   		</herramienta-helper>
					   	</p> 
				    </div>
			      	<div class="clearfix"></div>
			  	</div>
			  	<div class="education-agile-w3l">

		     		<div class="education-agile-w3l-year">
			       		<h4>2013-2016</h4>
					   	<h6>Freelance</h6>
			     	</div>

				 	<div class="education-agile-w3l-info">
				       	<h4>Fullstack web developer</h4>
					   	<p>
					   		<p>
						   		<p>
						   			Desarrollo de un ecommerce para venta y alquiler de 
						   			equipos para ferreteria y construccion
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'PHP, Javascript, Cake, Jquery.'}}">
						   		</herramienta-helper>
					   		</p>
				   			<p class="divider"></p>
							<p>
						   		<p>
						   			Desarrollo de help desk para la gestión de incidencias 
						   			dirigidas a un departamento de soporte técnico, asignación de 
						   			tickets para analistas implementando algoritmo round robin
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'PHP, Javascript, Codeigniter, JQuery UI.'}}">
						   		</herramienta-helper>
					   		</p>
				   			<p class="divider"></p>
					   		<p>
						   		<p>
						   			Desarrollo de una aplicación de mensajería interna, 
						   			gestor de memorándums y micronotas
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'PHP, Javascript, Codeigniter, JQuery UI.'}}">
						   		</herramienta-helper>
					   		</p>
				   			<p class="divider"></p>
					   		<p>
						   		<p>
						   			Desarrollo de una aplicación para la gestión de préstamos, y 
						   			solicitud de libros para una biblioteca.
						   		</p>
						   		<herramienta-helper 
						   			herramientas="{{'PHP, Javascript, Codeigniter, JQuery UI.'}}">
						   		</herramienta-helper>
					   		</p>
					   	</p>
			     	</div>
			      	<div class="clearfix"></div>
				  </div>
			  </div>
		</div>
		`
	}
}

module.exports = {
	name: 'cvExperiencia',
	func: cvExperiencia
};