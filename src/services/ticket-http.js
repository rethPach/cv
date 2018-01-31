function ticketHttp($http) {
	var endpoint = 'http://localhost/tickets/public/';
	return {
		post: function(url, data, config) {
			return $http.post(endpoint.concat(url), endpoint);
		},

		get: function(url, config) {
			return $http.get(endpoint.concat(url), config);
		}
	}
}

module.exports = {
	name: 'ticketHttp',
	func: ticketHttp
};