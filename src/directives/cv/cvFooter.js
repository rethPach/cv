function cvFooter() {
	return {
		controller: function($scope) {

			$scope.direccion = {
				key: 'Direccion',
				value: 'Caracas, Venezuela'
			},

			$scope.email = {
				key: 'Email',
				value: 'nazarethj.pacheco@gmail.com',
				mailto: 'nazarethj.pacheco@gmail.com'
			}

			$scope.llamar = {
				key: 'Telefonos',
				value: '02125374003'
			}
		},
		template: `
		<style>

			.w3ls_footer_grid_leftr h4 {
				
			}

			.w3ls_footer_grid_left:hover .w3ls_footer_grid_leftl {
				color: #fb9902
			}

			.w3ls_footer_grid_leftl {
				background: #fb9902;
			}

			.w3ls_footer_grid_left:hover .w3ls_footer_grid_leftr h4 {
				color: #fb9902
			}

			.w3ls_footer_grid_left {
				background: #353537;
			}

			.w3l_footer {
				background: #064661
			}

		</style>
		<div class="w3l_footer" id="contacto">
			<div class="container">
				
				<div class="w3ls_footer_grids">
					
					<div class="w3ls_footer_grid">
						<div class="col-md-4 w3ls_footer_grid_left">
							<div class="w3ls_footer_grid_leftl">
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div class="w3ls_footer_grid_leftr">
								<h4>{{direccion.key}}</h4>
								<p>{{direccion.value}}</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="col-md-4 w3ls_footer_grid_left">
							<div class="w3ls_footer_grid_leftl">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</div>
							<div class="w3ls_footer_grid_leftr">
								<h4>{{email.key}}</h4>
								<a href="{{email.mailto}}">{{email.value}}</a>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="col-md-4 w3ls_footer_grid_left">
							<div class="w3ls_footer_grid_leftl">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div class="w3ls_footer_grid_leftr">
								<h4>{{llamar.key}}</h4>
								<p>{{llamar.value}}</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
			</div>
		</div>
		`
	}
}

module.exports = {
	name: 'cvFooter',
	func: cvFooter
}