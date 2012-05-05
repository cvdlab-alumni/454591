/* Fuselage*/

// I divide the fuselage in three parts: backFuselage, frontFuselage and glassFuselage

var surface_domain = DOMAIN([[0,1],[0,1]])([50,100]);

// I'm finding the controlPoints of the backFuselage. Then i find the other control points by dividing
// and translating them and i make NUBS curves with all them.

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



// I'm finding the controlPoints of the frontFuselage. Then i find the other control points by
// dividing and translating them and i make NUBS curves with all them.

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




// I'm finding the controlPoints of the glass. Then i find the other control points by 
// dividing and translating them and i make NUBS curves with all them.


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

DRAW(fuselage);