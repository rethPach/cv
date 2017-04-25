function cvMain() {

	return {

		link: function() {
			var slider = $("#slider3");
			var responsiveSlidesConfig = {
				auto: true,
				pager:true,
				nav:false,
				speed: 50,
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
		<style>
			
			.slider-info {
				margin-top: 6px;
				height: 60px;
			}

			.slider-info p, .banner h3, .banner h2 {
				letter-spacing: 3px;
			}

			.slider-info p {
				margin: 3px 0px;
				font-size: 12px;
			}

			.banner h3 {
				font-size: 35px;
				color: #fb9902;
				text-shadow: 1px 1px black;
			}

			.banner h2 {
				color: #525252;
			  	text-shadow: 2px 2px black;
			}

			.banner img {
				border: 1px solid #fb9902;
			}

			.callbacks_tabs {
				top: 90px;
			}

		</style>
		<div class="main" id="home">
			<div class="banner">
				<img src="dist/images/pic2.jpg" alt=" " class="img-responsive">
				<h2>Nazareth Pacheco</h2>
				<h3>Programador / WEB DEVELOPER</h3>
				<div class="callbacks_container">
					<ul class="rslides" id="slider3">
						<li>
							<div class="slider-info">
						  		<p>Soluciono problemas del mundo real,</p>
						  		<p>bajo el paradigma orientación a objetos.</p>
							</div>
						</li>
						<li>
							<div class="slider-info">
							   <p>Preocupado por crear soluciones basadas en,</p> 
							   <p>código de calidad practicante SCRUM y</p>
							   <p>eXtreme programming.</p>
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
			</div>
		</div>
		`

	}

}

module.exports = {
	name: 'cvMain',
	func: cvMain
};

