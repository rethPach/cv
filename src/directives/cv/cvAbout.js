function cvAbout() {
	return {
		link: function($scope) {
			$scope.developer = {
				nombre: 'Nazareth Pacheco',
				edad: 27,
				direccion: 'Caracas, Venezuela',
				email: 'nazarethj.pacheco@gmail.com',
				mailto: 'mailto:nazarethj.pacheco@gmail.com',
				hobbies: 'Cocinar, Baloncesto, Robotica, Comics, Cine, Open Ecology.'
			}
		},

		template: `
		<style>
			h3.w3l_head {
				color: #525252;
			}

			p.w3ls_head_para  {
				color: #064661;
			}

			.w3ls-agile-left-info {
				border-bottom: 1px solid #525252;
			}
			
			.w3ls-agile-left-info a, .education-agile-w3l-year h6 {
				color: #fb9902;
			}

			.education-agile-w3l-year {
			    border-left: 2px solid #fb9902;
			}

			h4 .btn-link {
				color: #fb9902
			}

			.w3ls-agile-left-info p {
				color: #064661
			}

			.w3ls-agile-left-info h4, .social-info h4 {
				color: #525252;
			}

			.w3ls-agile-left-info a:hover, .education-agile-w3l-year h6:hover {
				text-decoration: underline;
			}

		</style>
		<div class="about" id="about">
			<div class="container">
				<h3 class="w3l_head">Sobre Mi</h3>
				<p class="w3ls_head_para">Información Personal.</p>
				<div class="w3l-grids-about">
					<div class="col-md-5 w3ls-ab-right">
						<div class="agile-about-right-img">
							<img src="dist/images/ab.jpg" alt="">
						</div>
					</div>
					<div class="col-md-7 w3ls-agile-left">
						<div class="w3ls-agile-left-info">
							<h4>Nombre</h4>
							<p>{{developer.nombre}}</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Edad</h4>
							<p>{{developer.edad}}</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Dirección</h4>
							<p>{{developer.direccion}}</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Email</h4>
							<p>
								<a href="{{developer.mailto}}">
									{{developer.email}}
								</a>
							</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Hobbies</h4>
							<p>{{developer.hobbies}}</p>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
		`
	}
}

module.exports = {
	name: 'cvAbout',
	func: cvAbout
};