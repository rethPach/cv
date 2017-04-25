function cvAbout() {
	return {
		link: function() {

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
				color: #525252;
			}

			.education-agile-w3l-year {
			    border-left: 2px solid #fb9902;
			}

			h4 .btn-link {
				color: #fb9902
			}

		</style>
		<div class="about" id="about">
			<div class="container">
				<h3 class="w3l_head">Sobre Mi</h3>
				<p class="w3ls_head_para">Informacion Personal.</p>
				<div class="w3l-grids-about">
					<div class="col-md-5 w3ls-ab-right">
						<div class="agile-about-right-img">
							<img src="dist/images/ab.jpg" alt="">
						</div>
					</div>
					<div class="col-md-7 w3ls-agile-left">
						<div class="w3ls-agile-left-info">
							<h4>Nombre</h4>
							<p>Nazareth Pacheco</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Sexo</h4>
							<p>Masculino</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Direccion</h4>
							<p>Caracas</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Email</h4>
							<p>
								<a href="mailto:nazarethj.pacheco@gmail.com">
									nazarethj.pacheco@gmail.com
								</a>
							</p>
						</div>
						<div class="w3ls-agile-left-info">
							<h4>Hobbies</h4>
							<p>Cocinar, Baloncesto, Robotica, Comics, Cine, Open Ecology.</p>
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