function cvNavigation() {


	return {
		link: function() {

		},

		template: `
		<style>
			.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {
				color: #fb9902 !important;
			}
		</style>
		<div class="w3_navigation">

			<div class="container">

				<nav class="navbar navbar-default">

					<div class="navbar-header">

					  <button 
					  	type="button" 
					  	class="navbar-toggle collapsed" 
					  	data-toggle="collapse" 
					  	data-target="#bs-example-navbar-collapse-1">

							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>

					  </button>

					</div>

					<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
						<nav class="cl-effect-1" id="cl-effect-1">
							<ul class="nav navbar-nav">
								<link-scroll 
									href="{{'about'}}" 
									text="{{'Sobre Mi'}}">
								</link-scroll>

								<link-scroll 
									href="{{'services'}}" 
									text="{{'Que Puedo Aportar'}}">
								</link-scroll>

								<link-scroll 
									href="{{'experiencia'}}" 
									text="{{'Experiencia'}}">
								</link-scroll>

								<link-scroll 
									href="{{'habilidades'}}" 
									text="{{'Habilidades'}}">
								</link-scroll>

								<link-scroll 
									href="{{'contacto'}}" 
									text="{{'Contacto'}}">
								</link-scroll>
							</ul>

						</nav>
						
					</div>

				</nav>

			</div>

		</div>
		`


	}


}

module.exports = {
	name: 'cvNavigation',
	func: cvNavigation
};