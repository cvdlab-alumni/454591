var drawSphere = function(r,n){
	var domain = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);

	var mapping = function (p){
		var alfa = p[0]-(PI/2);
		var beta = p[1];

		var x = r*COS(alfa)*COS(beta);
		var y = r*COS(alfa)*SIN(beta);
		var z = r*SIN(alfa);

		return [x,y,z];
	}
	var mapped = MAP(mapping)(domain);


	DRAW(mapped);
	return mapped;
}