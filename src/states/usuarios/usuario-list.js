function usuarioList($stateProvider) {
	$stateProvider.state('main.usuario-list', {
		url: '/usuario-list',
		controller: function($scope, ticketHttp) {

			angular.extend($scope, {
				editarUsuario: editarUsuario,
				verDetallesUsuario: verDetallesUsuario,
				suspenderUsuario: suspenderUsuario,
				crearUsuario: crearUsuario,
				paginator: {
					_items: [],
					items: [],
					itemPerPage: 10,
					totalItems: 0,
					currentPage: 1,
					setItemMap: function(itemMap) {
						this.itemMap = itemMap;
					},
					resolve: function(next) {
						return next.then(this.setItems.bind(this));
					},
					setItems: function(response) {
						this._items = this.items = this.itemMap(response.data);			
						this.next();			
						this.totalItems = this._items.length;
					},
					next: function() {
						this.items = this.paginate(this._items, this.itemPerPage, this.currentPage);
					},
					paginate: function(array, page_size, page_number) {
						--page_number;
  					return array.slice(page_number * page_size, (page_number + 1) * page_size);
					}
				}
			});

			function init() {
				$scope.paginator.setItemMap(usuarioMap);
				$scope.paginator.resolve(usuarios());
			}

			function usuarioMap(items) {
				return items.map(function(usuario) {
					usuario.nombres = usuario.persona.nombre + usuario.persona.apellido;
					usuario.apellidos = usuario.persona.apellido + usuario.persona.segundo_apellido;
					usuario.cedula = usuario.persona.cedula;
					return usuario;
				});
			}

			function verDetallesUsuario(usuario) {
				console.log('ver detalles del usuario');
			}

			function editarUsuario(usuario) {
				console.log('editar detalles de usuario');
			}

			function crearUsuario() {
				console.log('crear usuario');
			}

			function suspenderUsuario(usuario) {
				console.log('suspenderUsuario');
			}

			function usuarios() {
				return ticketHttp.get('users');
			}

			init();

		},
		template: `
		<h1>
			<span>Lista de usuarios</span>
			<button 
				type="button" ng-click="crearUsuario()"
				class="btn btn-primary pull-right" aria-label="Left Align">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
				Crear usuario
			</button>
		</h1>
		<table class="table table-bordered">
  			<thead>
  				<td>Nombres</td>
  				<td>Apellidos</td>
  				<td>Cedula</td>
  				<td>Acciones</td>
  			</thead>
  			<tbody>
  				<tr ng-repeat="usuario in paginator.items">
  					<td>{{usuario.nombres}}</td>
  					<td>{{usuario.apellidos}}</td>
  					<td>{{usuario.cedula}}</td>
  					<td>
  						<button 
  							type="button" ng-click="editarUsuario(usuario)"
  							class="btn btn-default" aria-label="Left Align">
  							<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							</button>
							<button 
								type="button" ng-click="verDetallesUsuario(usuario)"
								class="btn btn-default" aria-label="Left Align">
  							<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
							</button>
							<button 
								type="button" ng-click="suspenderUsuario(usuario)"
								class="btn btn-default" aria-label="Left Align">
  							<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
							</button>
  					</td>
  				</tr>
  			</tbody>
		</table>
		<ul uib-pagination 
			items-per-page="paginator.itemPerPage"
			total-items="paginator.totalItems" 
			ng-model="paginator.currentPage" 
			ng-change="paginator.next()">
		</ul>
		`
	});
}

module.exports = usuarioList;