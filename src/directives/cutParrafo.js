function cutParrafo() {
	return {
		scope: {
			parrafo: '=',
			resumen: '=',
			limite: '=',
			titulo: '@'
		},
		controller: function($scope, $uibModal) {
			$scope.mostrarParrafoCompleto = mostrarParrafoCompleto;

			function mostrarParrafoCompleto() {
				var modal = $uibModal.open({
					animation: true,
					resolve: {
						parrafos: function() {
							return $scope.parrafo;
						},
						titulo: function() {
							return $scope.titulo;
						}
					},
			      	controller: function($scope, $uibModalInstance, parrafos, titulo) {
			      		$scope.parrafos = parrafos;
			      		$scope.titulo = titulo;
			      	},
			      	templateUrl: 'myModalContent.html',
				});

				modal.result.then(ok, cancel);

				function ok() {

				}

				function cancel() {

				}
			}
		},
		template: `

		<p>
			<span>
				{{ resumen | limitTo: limite }}
			</span>
			<button 
				ng-click="mostrarParrafoCompleto()"
				ng-if="resumen.length > limite"
				type="button" 
				class="btn btn-link glyphicon glyphicon-option-horizontal">	
			</button>
		</p>


		<script type="text/ng-template" id="myModalContent.html">
			<style>
				
				.modal-content {
					border-radius: 0px;
					background: rgba(6, 70, 97, 0.95);
					color: white;
				}

				.modal-body {
					padding: 0px 40px 40px 40px;

				}

				.modal-title {
					text-align: center;
				}

				.parrafo {
					margin-top: 20px;
				}

			</style>
	        <div class="modal-header">
	            <h3 class="modal-title" id="modal-title">{{titulo}}</h3>
	        </div>
	        <div class="modal-body" id="modal-body">
	           <p class="parrafo" ng-repeat="parrafo in parrafos">
	           		{{ parrafo}}
	           </p>
	        </div>
	    </script>



		`
	}
}

module.exports = {
	name: 'cutParrafo',
	func: cutParrafo
};