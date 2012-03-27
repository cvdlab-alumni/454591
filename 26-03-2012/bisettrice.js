var domain = DOMAIN ([[0,1]])([10]);
var mapping = function (p) {
	var u = p[0];

	return [u,u];
};

var mappedBisettrice = MAP(mapping)(domain);