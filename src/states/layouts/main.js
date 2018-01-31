function main($stateProvider) {

	$stateProvider.state('main', {
		url: '/main',
		absolute: true,
		controller: function($scope) {
			angular.extend($scope, {
				toogleSidebar: true,
				menuOptions: [],
				storeName: 'Frank Store'
			});

			function init() {
				setMenuOptions('ADMIN');
			}

			function setMenuOptions(rol) {
				var menus = {
					ADMIN: [{
						state: '',
						label: 'Usuarios'
					}, {
						state: '',
						label: 'Hardwares'
					}, {
						state: '',
						label: 'Incidencias'
					}]
				};
				$scope.menuOptions = menus[rol];
			}

			init();
		},
		template: `
		<div id="wrapper" ng-class="{'toggled': toogleSidebar}">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">{{storeName}}</a>
                </li>
                <li ng-repeat="menuOption in menuOptions">
                    <a href="#">{{menuOption.label}}</a>
                </li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="container-fluid">
	            <ui-view></ui-view>
	          	<toogle-bottom></toogle-buttom>
	        </div>
        </div>
    </div>
	`
	});
}

module.exports = main;