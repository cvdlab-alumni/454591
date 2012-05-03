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

var domain = INTERVALS(1)(20);

var controlPoints = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

var splineCardinal = COLOR([1,0,0])(SPLINE(CUBIC_CARDINAL(domain))(controlPoints));

var splineCubic = COLOR([0,1,0])(SPLINE(CUBIC_UBSPLINE(domain))(controlPoints));

var points = [
              [-4,7],[-4,5],[-2,5],[-2,7],
              [-5,3],[-5,1],[-3,1],[-3,3],
              [-4,0],[-4,-2],[-2,-2],[-2,0],
              [-2,2],[-2,0],[0,0],[0,2],
              [0.5,2.5],[0.5,0.5],[2.5,0.5],[2.5,2.5],
              [2,5],[2,3],[4,3],[4,5],
              [4,6],[4,4],[6,4],[6,6],
              [6,3],[6,1],[8,1],[8,3],
              [5,-1],[5,-3],[7,-3],[7,-1],
              [1,-2],[1,-4],[3,-4],[3,-2]
              ];

var cells = [[0,1,3],[1,2,3],[4,5,7],[5,6,7],[8,9,11],[9,10,11],[12,13,15],[13,14,15],[[16,17,19],[17,18,19]],[20,21,23],[21,22,23],[24,25,27],[28,29,30],[31,32,34],[32,33,34],[35,36,38],[36,37,38]];

var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);

var curve = STRUCT([splineCardinal,splineCubic, simplicialComplex]);

DRAW(curve);





