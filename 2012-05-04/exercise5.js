/* Airstrip */

// I'm doing a simplified airstrip like a composition of a green, a course and a controlTower

var leftGreen = SIMPLEX_GRID([
	[50],
	[200],
	[0.4]
	]);

var rightGreen = SIMPLEX_GRID([
	[-50,-100,50],
	[200],
	[0.4]
	]);

var green = COLOR([0.13,0.55,0.13])(STRUCT([leftGreen,rightGreen]));

var course = COLOR([0.33,0.33,0.33])(SIMPLEX_GRID([
	[-50,100],
	[200],
	[0.1]
	]));



var strips = COLOR([1,1,1])(SIMPLEX_GRID([
	[-50,-45,10],
	[40,-10,40,-10,40,-10,40],
	[0.2]
	]));

var downControlTower = COLOR([1,0,0])(SIMPLEX_GRID([
	[-20,10],
	[-20,10],
	[50]
	]));

var glassControlTower = COLOR([0,1,1,0.6])(SIMPLEX_GRID([
	[-20,10],
	[-20,10],
	[-50,10]
	]));

var upControlTower = COLOR([1,0,0])(SIMPLEX_GRID([
	[-20,10],
	[-20,10],
	[-60,1]
	]));

var controlTower = STRUCT([downControlTower,glassControlTower,upControlTower]);



var airstrip = STRUCT([green,course,strips,controlTower]);



/*  single wing */

// i choose the first control points and i use theme in the Bezier curve

var controlPoints = [[12,2,0],[6,4,0],[0,3,0],[0,1,0],[6,0,0],[12,2,0]];


var c1 = BEZIER(S0)(controlPoints);


var domain1 = INTERVALS(1)(30);

var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

// i obtain the other control points dividing and translating the first control points and then i use them in the Bezier curves


var controlPoints2 = controlPoints.map(function (p){ return [p[0],p[1],p[2]+2]});

var controlPoints3 = controlPoints.map(function (p){ return [p[0]/1.1+1,p[1]/1.1,p[2]/1+2.5]});

var controlPoints4 = controlPoints.map(function (p){ return [p[0]/1.2+1.9,p[1]/1.2,p[2]+8]});

var controlPoints5 = controlPoints.map(function (p){ return [p[0]/1.3+2.2,p[1]/1.3,p[2]+12]});

var controlPoints6 = controlPoints.map(function (p){ return [p[0]/1.4+2.7,p[1]/1.4,p[2]+14]});

var controlPoints7 = controlPoints.map(function (p){ return [p[0]/1.5+3.4,p[1]/1.5,p[2]+16]});

var controlPoints8 = controlPoints.map(function (p){ return [p[0]/1.6+3.6,p[1]/1.6,p[2]+18]});

var controlPoints9 = controlPoints.map(function (p){ return [p[0]/1.7+4,p[1]/1.7,p[2]+22]});


var c2 = BEZIER(S0)(controlPoints2);

var c3 = BEZIER(S0)(controlPoints3);

var c4 = BEZIER(S0)(controlPoints4);

var c5 = BEZIER(S0)(controlPoints5);

var c6 = BEZIER(S0)(controlPoints6);

var c7 = BEZIER(S0)(controlPoints7);

var c8 = BEZIER(S0)(controlPoints8);

var c9 = BEZIER(S0)(controlPoints9);


var w = BEZIER(S1)([c1,c2,c3,c4,c5,c6,c7,c8,c9,[8.5,1.5,22]]);

var wing1 = T([0,2])([0.5,4])(R([0,2])([PI/2])(COLOR([0.41,0.35,0.80])(MAP(w)(domain2))));

var wing2 = R([0,1])([PI])(T([0,1])([-1,-4])(wing1));

var wing = STRUCT([wing1,wing2]);


/* Fuselage*/

// I divide the fuselage in three parts: backFuselage, frontFuselage and glassFuselage

var surface_domain = DOMAIN([[0,1],[0,1]])([50,100]);

// I'm finding the controlPoints of the backFuselage. Then i find the other control points dividing and translating them and i
// make NUBS curves with all them.

var controlPoints = [[1.5,0,0],[0,0,0],[0.5,4,0],[1,5,0],[1.5,6,0],[2,5,0],[2.5,4,0],[3,0,0],[1.5,0,0]];

var knots = [0,0,0,1,2,3,4,5,6,7,7,7];

var c1 = NUBS(S0)(2)(knots)(controlPoints);

var controlPoints2 = controlPoints.map(function (p){ return [p[0],p[1],p[2]+3]});

var controlPoints3 = controlPoints.map(function (p){ return [p[0]/1.2+0.5,p[1]/1.2,p[2]+6]});

var controlPoints4 = controlPoints.map(function (p){ return [p[0]/1.4+0.7,p[1]/1.4,p[2]+9]});

var controlPoints5 = controlPoints.map(function (p){ return [p[0]/1.6+0.9,p[1]/1.6,p[2]+12]});

var controlPoints6 = controlPoints.map(function (p){ return [p[0]/1.8+1.1,p[1]/1.8,p[2]+15]});

var controlPoints7 = controlPoints.map(function (p){ return [p[0]/2+1.2,p[1]/2,p[2]+18]});

var controlPoints8 = controlPoints.map(function (p){ return [p[0]/2.2+1.3,p[1]/2.2,p[2]+21]});

var controlPoints9 = controlPoints.map(function (p){ return [p[0]/2.4+1.4,p[1]/2.4,p[2]+24]});


var c2 = NUBS(S0)(2)(knots)(controlPoints2);

var c3 = NUBS(S0)(2)(knots)(controlPoints3);

var c4 = NUBS(S0)(2)(knots)(controlPoints4);

var c5 = NUBS(S0)(2)(knots)(controlPoints5);

var c6 = NUBS(S0)(2)(knots)(controlPoints6);

var c7 = NUBS(S0)(2)(knots)(controlPoints7);

var c8 = NUBS(S0)(2)(knots)(controlPoints8);

var c9 = NUBS(S0)(2)(knots)(controlPoints9);

var surface1 = BEZIER(S1)([c1,c2,c3,c4,c5,c6,c7,c7,c9,[1.8,1.5,24]]);

var backFuselage = COLOR([0.41,0.35,0.80])(MAP(surface1)(surface_domain));



// I'm finding the controlPoints of the frontFuselage. Then i find the other control points dividing and translating them and i
// make NUBS curves with all them.

var controlPoints10 = [[1.5,0,0],[0,0,0],[0.75,4.5,0],[1.5,4.5,0],[2.25,4.5,0],[3,0,0],[1.5,0,0]];

var knots2 = [0,0,0,1,2,3,4,5,5,5];

var c10 = NUBS(S0)(2)(knots2)(controlPoints10);

var controlPoints11 = controlPoints10.map(function (p){ return [p[0],p[1],p[2]-3]});

var controlPoints12 = controlPoints10.map(function (p){ return [p[0],p[1]/1.4,p[2]-6]});

var controlPoints13 = controlPoints10.map(function (p){ return [p[0],p[1]/1.6,p[2]-9]});

var controlPoints14 = controlPoints10.map(function (p){ return [p[0],p[1]/2+0.2,p[2]-12]});

var controlPoints15 = controlPoints10.map(function (p){ return [p[0],p[1]/2.2+0.5,p[2]-15]});



var c11 = NUBS(S0)(2)(knots2)(controlPoints11);

var c12 = NUBS(S0)(2)(knots2)(controlPoints12);

var c13 = NUBS(S0)(2)(knots2)(controlPoints13);

var c14 = NUBS(S0)(2)(knots2)(controlPoints14);

var c15 = NUBS(S0)(2)(knots2)(controlPoints15);


var surface2 = BEZIER(S1)([c10,c11,c12,c13,c14,c15,[1.5,1.5,-15.5]]);

var frontFuselage = COLOR([0.98,0.92,0.84])(MAP(surface2)(surface_domain));



// I'm finding the controlPoints of the glass. Then i find the other control points dividing and translating them and i
// make NUBS curves with all them.


var controlPoints16 = [[1.5,4.5,0],[0.75,4.5,0],[1.5,6,0],[2.25,4.5,0],[1.5,4.5,0]];

var knots3 = [0,0,0,1,2,3,3,3];

var c16 = NUBS(S0)(2)(knots3)(controlPoints16);

var controlPoints17 = controlPoints16.map(function (p){ return [p[0],p[1],p[2]-2]});

var controlPoints18 = controlPoints16.map(function (p){ return [p[0],p[1]-0.5,p[2]-4]});

var controlPoints19 = controlPoints16.map(function (p){ return [p[0],p[1]/1.5-0.6,p[2]-6]});


var c17 = NUBS(S0)(2)(knots3)(controlPoints17);

var c18 = NUBS(S0)(2)(knots3)(controlPoints18);

var c19 = NUBS(S0)(2)(knots3)(controlPoints19)


var surface3 = BEZIER(S1)([c16,c17,c18,c19]);

var glassFuselage = COLOR([0,1,1,0.6])(MAP(surface3)(surface_domain));

var fuselage = STRUCT([backFuselage,frontFuselage,glassFuselage]);

/* Stabilizers*/

// I divide the stabilizers in two parts: horizontalStabilizer and verticalStabilizer

var surface_domain = DOMAIN([[0,1],[0,1]])([50,100]);

// I'm finding the controlPoints of the horizontalStabilizer. Then i find the other control points dividing and translating them and i
// make NUBS curves with all them.

var controlPoints = [[0.6,0,0],[0.1,0.1,0],[0,0.1,0],[0.1,0.2,0],[0.6,0.2,0],[1.1,0.2,0],[1.2,0.1,0],[1.1,0,0],[0.6,0,0]];

var knots = [0,0,0,1,2,3,4,5,6,7,7,7];

var c1 = NUBS(S0)(2)(knots)(controlPoints);

var controlPoints2 = controlPoints.map(function (p){ return [p[0],p[1],p[2]+1.5]});

var controlPoints3 = controlPoints.map(function (p){ return [p[0],p[1],p[2]+3]});

var controlPoints4 = controlPoints.map(function (p){ return [p[0],p[1],p[2]+4.5]});


var c2 = NUBS(S0)(2)(knots)(controlPoints2);

var c3 = NUBS(S0)(2)(knots)(controlPoints3);

var c4 = NUBS(S0)(2)(knots)(controlPoints4);


var surface1 = BEZIER(S1)([c1,c2,c3,c4,[0.75,0.1,4.5]]);

var horizontalStabilizer1 =  COLOR([0.98,0.92,0.84])(MAP(surface1)(surface_domain));

var horizontalStabilizer2 = R([1,2])([PI])(T([1,2])([-0.2,0])(horizontalStabilizer1));

var horizontalStabilizer = R([0,2])([PI/2])(STRUCT([horizontalStabilizer1, horizontalStabilizer2]));



// I'm finding the controlPoints of the verticalStabilizer. Then i find the other control points dividing and translating them and i
// make NUBS curves with all them.

var controlPoints5 = [[0.2,0,0],[0,0,0],[0,2,0],[0.1,3.2,0],[0.2,4,0],[0.3,3.2,0],[0.4,2,0],[0.4,0,0],[0.2,0,0]];

var c5 = NUBS(S0)(2)(knots)(controlPoints5);

var controlPoints6 = controlPoints5.map(function (p){ return [p[0],p[1],p[2]-1]});

var controlPoints7 = controlPoints5.map(function (p){ return [p[0],p[1]/1.1,p[2]-1.7]});

var controlPoints8 = controlPoints5.map(function (p){ return [p[0],p[1]/1.6,p[2]-2.4]});

var controlPoints9 = controlPoints5.map(function (p){ return [p[0],p[1]/2,p[2]-3.1]});



var c6 = NUBS(S0)(2)(knots)(controlPoints6);

var c7 = NUBS(S0)(2)(knots)(controlPoints7);

var c8 = NUBS(S0)(2)(knots)(controlPoints8);

var c9 = NUBS(S0)(2)(knots)(controlPoints9);


var surface2 = BEZIER(S1)([[0.2,1.5,-0.1],c5,c6,c7,c8,c9,[0.2,0.5,-3.2]]);

var verticalStabilizer = T([0,1])([-0.2,-1])(COLOR([0.41,0.35,0.80])(MAP(surface2)(surface_domain)));

var stabilizer = T([0,1,2])([1.9,1,25])(STRUCT([horizontalStabilizer, verticalStabilizer]));

/* Helix */

var surface_domain = DOMAIN([[0,1],[0,1]])([45,60]);//da togliere
var controlpoints_helix1 = [[0,0,0],[3.2,0.8,0],[4,4,0],[0.8,3.2,0],[0,0,0]];
var curve1 = BEZIER(S0)(controlpoints_helix1);

var controlpoints_helix2 = controlpoints_helix1.map(function (p){ return [p[0],p[1],p[2]-0.07]}); 
var curve2 = BEZIER(S0)(controlpoints_helix2);

var profile = BEZIER(S1)([[2,2,0.06],curve1,curve2,[2,2,-0.07]]);
var helix_generic = MAP(profile)(surface_domain);
var helix1 = T([0,1])([-0.3,-0.7])(helix_generic);
var helix2 = R([0,1])([PI/2])(T([0,1])([-0.7,-0.3])(helix_generic));
var helix3 = R([0,1])([225*PI/180])(helix_generic);

var helix = COLOR([0.25,0.25,0.25])(T([0,1,2])([1.5,1.9,-15])(STRUCT([helix1, helix2, helix3])));

var airplane = R([1,2])([PI/2])(T([0,1,2])([97,10,-100])(STRUCT([wing,fuselage,stabilizer,helix])));

var project = STRUCT([airstrip,airplane]);

DRAW(project);







