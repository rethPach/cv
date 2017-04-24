function cvMain() {

	return {

		link: function() {
			var slider = $("#slider3");
			var responsiveSlidesConfig = {
				auto: true,
				pager:true,
				nav:false,
				speed: 500,
				namespace: "callbacks",
				before: function () {
				  $('.events').append("<li>before event fired.</li>");
				},
				after: function () {
				  $('.events').append("<li>after event fired.</li>");
				}
		  	}

			slider.responsiveSlides(responsiveSlidesConfig);
		},

		template: `
		<div class="main" id="home">
			<div class="banner">
				<img src="dist/images/pic2.jpg" alt=" " class="img-responsive">
				<h2>Nazareth Pacheco</h2>
				<span>Programador / WEB DEVELOPER</span>
				<div class="callbacks_container">
					<ul class="rslides" id="slider3">
						<li>
							<div class="slider-info">
						  		<p>Soluciono problemas del mundo real, bajo el paradigma orientación a objetos.</p>
							</div>
						</li>
						<li>
							<div class="slider-info">
							   <p>Preocupado por crear soluciones basadas en código de calidad, practicante SCRUM y eXtreme programming.</p>
						    </div>
						</li>
						<li>
							<div class="slider-info">
								<p>Maker, Aficionado a la robótica.</p>
							</div>
						</li>
					</ul>
					<div class="clearfix"></div>
				</div>
			
				<ul class="top-links">
					<li><a href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
				</ul>
			</div>
		</div>
		`

	}

}

module.exports = {
	name: 'cvMain',
	func: cvMain
};

