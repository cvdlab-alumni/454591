var drawCilinder = function(r,h,n,m,color) {
	var dominio = DOMAIN([[0,2*PI],[0,h]])([n,m]);

	var mapping = function(p) {
		var u = p[0];
		var v = p[1];
		return [r * COS(u), r * SIN(u), v];
	};

	var mapped = MAP(mapping)(dominio);
	DRAW(mapped);
	COLOR(color)(mapped);
};