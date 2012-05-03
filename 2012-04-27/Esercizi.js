// Exercise 1

var muro1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);

var muro2 = POLYLINE([[0,4],[1,4],[1,6],[4,6],[4,4],[5,4],[5,6],[8,6],[8,4],[9,4],[9,7],[0,7],[0,4]]);

var mura = STRUCT([muro1, muro2]);

var murAlzate = EXTRUDE([3])(mura);

var murAlzateColorate = COLOR([0,1,0,])(murAlzate);

DRAW(murAlzateColorate);


// Exercise 2

var tetto = T([2])([3])(CUBOID([9,7,0.2]));

var boundary = BOUNDARY()(tetto);

var tettoVetro = COLOR([1,0,0,0.7])(boundary);

DRAW(tettoVetro);

// Exercise 3

var domain = INTERVALS (1)(20);

var controlPoints = [[1,0],[1,1],[1,0],[1,1]];

var curveMapping = CUBIC_HERMITE(S0)(controlPoints);

var curve = MAP(curveMapping)(domain);

DRAW(curve);

// Exercise 4

var domain = INTERVALS(1)(20);

var controlPoints = [[0,0],[3,1],[1,2],[2,3],[3,2]];

var curveMapping = BEZIER(S0)(controlPoints);

var curve = MAP(curveMapping)(domain);

DRAW(curve);

// Exercise 5

var domain = INTERVALS(1)(20);

var controlPoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlPoints);

DRAW(splineCardinal);

// Exercise 6

var domain = INTERVALS(1)(20);

var controlPoints =  [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlPoints);

DRAW(splineCubic);

// Exercise 7

var drawSphere = function(r,n,X,Y,Z){
       var domain = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);

       var mapping = function (p){
              var alfa = p[0]-(PI/2);
              var beta = p[1];

              var x = r*COS(alfa)*COS(beta);
              var y = r*COS(alfa)*SIN(beta);
              var z = r*SIN(alfa);

              return [x,y,z];
       }
       var mapped = COLOR([0,0,1,0.5])(T([0,1])([X,Y])(MAP(mapping)(domain)));

       DRAW(mapped);
       
       return mapped;
}




var domain = INTERVALS(1)(20);

var controlPoints = [[-3,6],[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3],[2,-3]];

var splineCardinal = COLOR([1,0,0])(SPLINE(CUBIC_CARDINAL(domain))(controlPoints));

var splineCubic = COLOR([0,1,0])(SPLINE(CUBIC_UBSPLINE(domain))(controlPoints));

for (var i = 0 in controlPoints){

       var point = controlPoints[i];

       var x = point[0];

       var y = point[1];

       drawSphere(0.1,10,x,y,0);
};

var curve = STRUCT([splineCardinal,splineCubic]);

DRAW(curve);

// Exercise 8

var drawSphere = function(r,n,X,Y,Z){
       var domain = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);

       var mapping = function (p){
              var alfa = p[0]-(PI/2);
              var beta = p[1];

              var x = r*COS(alfa)*COS(beta);
              var y = r*COS(alfa)*SIN(beta);
              var z = r*SIN(alfa);

              return [x,y,z];
       }
       var mapped = COLOR([0,0,1,0.5])(T([0,1])([X,Y])(MAP(mapping)(domain)));

       DRAW(mapped);
       
       return mapped;
}

var drawsplineCardinal = function(controlPoints,d1,d2){

var domain = INTERVALS(d1)(d2);       

polyline = POLYLINE(controlPoints);

var splineCardinal = COLOR([1,0,0])(SPLINE(CUBIC_CARDINAL(domain))(controlPoints));

for (var i = 0 in controlPoints){

       var point = controlPoints[i];

       var x = point[0];

       var y = point[1];

       drawSphere(0.1,10,x,y,0);
};

var SP = STRUCT([polyline, splineCardinal]);

DRAW(SP);

}



var drawsplineCubic = function(controlPoints,d1,d2){

var domain = INTERVALS(d1)(d2);       

polyline = POLYLINE(controlPoints);

var splineCubic = COLOR([1,0,0])(SPLINE(CUBIC_UBSPLINE(domain))(controlPoints));

for (var i = 0 in controlPoints){

       var point = controlPoints[i];

       var x = point[0];

       var y = point[1];

       drawSphere(0.1,10,x,y,0);
};

var SP = STRUCT([polyline, splineCubic]);

DRAW(SP);

}
