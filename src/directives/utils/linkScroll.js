function linkScroll() {
	return {
		replace: true,
		scope: {
			href: '@',
			text: '@'
		},
		controller: function($scope) {},
		template: `
		<li>
			<a 
				href="#{{href}}" 
				class="scroll hvr-bounce-to-bottom">
				{{text}}
			</a>
		</li>
		`
	}
}

module.exports = {
	name: 'linkScroll',
	func: linkScroll
};