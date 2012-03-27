var domain = DOMAIN ([[0,2*Math.PI]])([100]);
var mappingSinusoide = function (p) {
	var u = p[0];

	return [u,SIN(u)];
};

var mappedSinusoide = MAP(mappingSinusoide)(domain);