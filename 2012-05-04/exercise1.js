/*  single wing in a local coordinate system */

// i choose the first control points and i use theme in the Bezier curve

var controlPoints = [[12,2,0],[6,4,0],[0,3,0],[0,1,0],[6,0,0],[12,2,0]];


var c1 = BEZIER(S0)(controlPoints);


var domain1 = INTERVALS(1)(30);

var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

// i obtain the other control points by dividing and translating the first control points and 
// then i use them in the Bezier curves


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

var wing = COLOR([0.41,0.35,0.80])(MAP(w)(domain2));

DRAW(wing);

