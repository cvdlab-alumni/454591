//inzio con la costruzione di una facciata della villa

var front1 = SIMPLEX_GRID([
	[20],
	[2],
	[1.5]
	]);

var front2 = SIMPLEX_GRID([
	[2.5,-1,13,-1,2.5],
	[-2,1],
	[1.5]
	]);

var front3 = SIMPLEX_GRID([
	[20],
	[-3,1],
	[1.5]
	]);

var front4 = SIMPLEX_GRID([
	[9,-2,9],
	[-4,1],
	[1.5]
	]);


var front5 = SIMPLEX_GRID([
	[2.5,-1,2.5,-1,2,-2,2,-1,2.5,-1,2.5],
	[-5,3],
	[1.5]
	]);

var front6 = SIMPLEX_GRID([
	[9,-2,9],
	[-8,1],
	[1.5]
	]);

var front7 = SIMPLEX_GRID([
	[20],
	[-9,7],
	[1.5]
	]);

var front8 = SIMPLEX_GRID([
	[2.5,-1,2.5,-1,6,-1,2.5,-1,2.5],
	[-16,1],
	[1.5]
	]);

var front9 = SIMPLEX_GRID([
	[20],
	[-17,1],
	[1.5]
	]);

allfront = COLOR([0.992,0.96,0.901])(STRUCT([front1,front2,front3,front4,front5,front6,front7,front8,front9]));



//disegno i dettagli della facciata

var border1 = SIMPLEX_GRID([
	[6],
	[-4,0.5],
	[0.2]
	]);

var border2 = SIMPLEX_GRID([
	[-2,2],
	[-4.5,0.5],
	[0.2]
	]);

var lborder = S([2])([-1])(STRUCT([border1,border2]));

var rborder = T([0])([14])(lborder);

var border = COLOR([0.992,0.96,0.901])(STRUCT([lborder,rborder]));

var borderline1 =  SIMPLEX_GRID([
	[0,20.1],
	[-12,0.1],
	[0.1]
	]);

var borderline2 = SIMPLEX_GRID([
	[0,20.2],
	[-12.2,0.1],
	[0.2]
	]);

var borderline3 =SIMPLEX_GRID([
	[0,20.3],
	[-12.4,0.1],
	[0.3] 
	]);

var borderline4 =SIMPLEX_GRID([
	[0,20.4],
	[-12.6,0.1],
	[0.4]
	]) ;

var borderline5 = SIMPLEX_GRID([
	[0,20.5],
	[-12.8,0.1],
	[0.5]
	]) ;

var borderline6 =SIMPLEX_GRID([
	[0,20.6],
	[-13,0.1],
	[0.6]
	]); 

var borderline7 =SIMPLEX_GRID([
	[0,20.7],
	[-14,0.1],
	[0.7]
	]); 

var borderlines = COLOR([0.992,0.96,0.901])(S([2])([-1])(STRUCT([borderline1,borderline2,borderline3,borderline4,borderline5,borderline6,borderline7])));

var windowDecoration1 = POLYLINE([[2,8],[4,8],[3,8.5],[2,8]]);

var windowDecoration2 = POLYLINE([[2.4,8.1],[3.6,8.1],[3,8.4],[2.4,8.1]]);

var windowDecoration = STRUCT([windowDecoration1,windowDecoration2]);

var ewindowDecoration = EXTRUDE([0.4])(windowDecoration);

var rewindowDecoration = T([0])([6]) (R([0,2])([PI])(ewindowDecoration));

var lewindowDecoration = T([0])([14])(rewindowDecoration);

windowCuboid1 = T([0,1])([2,7.4]) (CUBOID([0.2, 0.6, 0.2]));

windowCuboid2 = T([0])([1.7])(windowCuboid1);

var rwindowCuboid = S([2])([-1])(STRUCT([windowCuboid1,windowCuboid2]));

var lwindowCuboid = T([0])([14])(rwindowCuboid);

var windowCuboid = STRUCT([rwindowCuboid,lwindowCuboid]);

var windowDecorations = COLOR([0.992,0.96,0.901])(STRUCT([rewindowDecoration,lewindowDecoration,windowCuboid]));

var doorDecoration1 = POLYLINE([[8,9.5],[12,9.5],[10,11.5],[8,9.5]]);

var doorDecoration2 = POLYLINE([[9,9.8],[11,9.8],[10,10.9],[9,9.8]]);

var doorDecoration = STRUCT([doorDecoration1,doorDecoration2]);

var edoorDecoration = EXTRUDE([0.4])(doorDecoration);

var redoorDecoration = T([0])([20]) (R([0,2])([PI])(edoorDecoration));

var doorCuboid1 = T([0,1])([8.4,8.9]) (CUBOID([0.2, 0.6, 0.2]));

var doorCuboid2 = T([0])([3])(doorCuboid1);

var doorCuboid = S([2])([-1])(STRUCT([doorCuboid1,doorCuboid2]));

var dc1 = T([0,1])([8.9,9.3]) (CUBOID([0.2, 0.2, 0.2]));

var dc2 = T([0])([0.4])(dc1);

var dc3 = T([0])([0.4])(dc2);

var dc4 = T([0])([0.4])(dc3);

var dc5 = T([0])([0.4])(dc4);

var dc6 = T([0])([0.4])(dc5);

var dc = S([2])([-1])(STRUCT([dc1, dc2, dc3, dc4, dc5, dc6 ]));

var doorDecorations = COLOR([0.992,0.96,0.901])(STRUCT([redoorDecoration,doorCuboid,dc]));

var rupperglass1 = SIMPLEX_GRID([
	[-2.5,1],
	[-16,1],
	[0.2]
	]); 

var rupperglass2 = T([0])([3.5])(rupperglass1);

var lupperglass1 = T([0])([10.5])(rupperglass1);

var lupperglass2 = T([0])([14])(rupperglass1);

var upperGlass = STRUCT([rupperglass1,rupperglass2,lupperglass1,lupperglass2]);


var rmiddlewindowglass1 = SIMPLEX_GRID([
	[-2.5,1],
	[-5,3],
	[0.2]
	]); 

var rmiddlewindowglass2 = T([0])([3.5])(rmiddlewindowglass1);

var lmiddlewindowglass1 = T([0])([14])(rmiddlewindowglass1);

var lmiddlewindowglass2 = T([0])([10.5])(rmiddlewindowglass1);

middleWindowGlasses = STRUCT([rmiddlewindowglass1,rmiddlewindowglass2, lmiddlewindowglass1,lmiddlewindowglass2]);

var rdownglass = SIMPLEX_GRID([
	[-2.5,1],
	[-2,1],
	[0.2]
	]); 

var ldownglass = T([0])([14])(rdownglass);

var downGlass = STRUCT([rdownglass,ldownglass]);

var doorGlass = SIMPLEX_GRID([
	[-9,2],
	[-4,5],
	[0.2]
	]); 

var glasses = COLOR([0,1,1,0.6])(STRUCT([middleWindowGlasses,upperGlass,downGlass,doorGlass]));

// disegno le cornici e le sbarre delle varie finestre

var grid1 = POLYLINE([[2.50,2.25,0],[3.50,2.25,0],[2.50,2.25,0]]);

var grid2 = T([1])([0.25])(grid1);

var grid3 = T([1])([0.25])(grid2);

var grid4 = POLYLINE([[2.75,2,0],[2.75,3,0],[2.75,2,0]]);

var grid5 = T([0])([0.25])(grid4);

var grid6 = T([0])([0.25])(grid5);

var rgrid = COLOR([0,0,0])(STRUCT([grid1,grid2,grid3,grid4,grid5,grid6]));

var lgrid = T([0])([14])(rgrid);

var grid = STRUCT([rgrid,lgrid]);

var middlewindowframe1 = T([0,1,2])([6,5,-0.10])(CUBOID([0.1,3,0.1]));

var middlewindowframe2 = T([0])([0.45])(middlewindowframe1);

var middlewindowframe3 = T([0])([0.9])(middlewindowframe1);

var middlewindowframe4 = T([0,1,2])([6,5,-0.10])(CUBOID([1,0.1,0.1]));

var middlewindowframe5 = T([1])([2.9])(middlewindowframe4);

var rmiddlewindowframe = COLOR([0,0,0])(STRUCT([middlewindowframe1,middlewindowframe2,middlewindowframe3,middlewindowframe4,middlewindowframe5]));

var lmiddlewindowframe = T([0])([7])(rmiddlewindowframe);

var middlewindowframe = COLOR([0.407,0.254,0.145])(STRUCT([lmiddlewindowframe,rmiddlewindowframe]));

var upperwindowframe1 = T([0,1,2])([2.5,16,-0.10])(CUBOID([0.1,1,0.1]));

var upperwindowframe2 = T([0])([0.45])(upperwindowframe1);

var upperwindowframe3 = T([0])([0.9])(upperwindowframe1);

var upperwindowframe4 = T([0,1,2])([2.5,16,-0.10])(CUBOID([1,0.1,0.1]));

var upperwindowframe5 = T([1])([0.9])(upperwindowframe4);

var rupperwindowframe = COLOR([0,0,0])(STRUCT([upperwindowframe1,upperwindowframe2,upperwindowframe3,upperwindowframe4,upperwindowframe5]));

var r1upperwindowframe = T([0])([3.5])(rupperwindowframe);

var l1upperwindowframe = T([0])([10.5])(rupperwindowframe);

var lupperwindowframe = T([0])([14])(rupperwindowframe);

var upperwindowframe = COLOR([0.407,0.254,0.145])(STRUCT([rupperwindowframe,r1upperwindowframe,l1upperwindowframe,lupperwindowframe]));

//disegno il sottotetto

var sottotetto1 = SIMPLEX_GRID([
	[21],
	[-18,0.5],
	[21]
	]);
var sottotetto2 = SIMPLEX_GRID([
	[22],
	[-18.5,1],
	[22]
	]);

var tsottotetto1 = T([0,2])([-0.5,-0.5])(sottotetto1);

var tsottotetto2 = T([0,2])([-1,-1])(sottotetto2);

var sottotetto = COLOR([0.992,0.96,0.901])(STRUCT([tsottotetto1,tsottotetto2]));

// Disegno il tetto

var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(10)]);

var c1 = CUBIC_HERMITE(S0)([[-2,19.5,-2],[22,19.5,-2],[0,0,0],[0,0,0]]);

var c2 = CUBIC_HERMITE(S0)([[-2,19.5,0],[10,25,10],[0,0,0],[0,0,0]]);

var sur1 = CUBIC_HERMITE(S1)([c1,c2,[0,0,0],[0,0,0]]);

var outSur1 = MAP(sur1)(domain);

tetto = COLOR([0.804,0.31,0.223,1])(outSur1);

//Disegno i dettagli del tetto

baseCamino = COLOR([0.992,0.96,0.901])(T([0,1])([3,20])(CUBOID([1,2,1])));

pezzoCamino1 = COLOR([0.804,0.31,0.223,1]) (T([0,1])([3,22])(CUBOID([0.25,0.30,0.25])));

pezzoCamino2 = T([0])([0.75])(pezzoCamino1);

pezzoCamino3 = T([2])([0.75])(pezzoCamino1);

pezzoCamino4 = T([0,2])([0.75,0.75])(pezzoCamino1);

coperchioCamino = COLOR([0.804,0.31,0.223,1]) (T([0,1])([3,22.30])(CUBOID([1,0.20,1])));

var camino1 = STRUCT([baseCamino, pezzoCamino1,pezzoCamino2,pezzoCamino3,pezzoCamino4,coperchioCamino]);

var camino2 = T([0])([14])(camino1);

var camino3 = T([2])([18])(camino1);

var camino4 = T([0,2])([14,18])(camino1);

var camini = STRUCT([camino1,camino2,camino3,camino4]);

// Disegno la sezione cilindrica centrale della villa

var domain = DOMAIN([[0,1],[0,2*PI]])([50,50]);

var profile = BEZIER(S0)([[6,0,0],[6,25,25]]);

var mapping = ROTATIONAL_SURFACE(profile);

var surface = MAP(mapping)(domain);

cilindro = COLOR([0.992,0.96,0.901])(T([0,2])([10,10])(R([1,2])([-PI/2])(surface)));

//disegno il tetto della cupola

var domain = DOMAIN([[0,1],[0,2*PI]])([10,10]);

var profile = BEZIER(S0)([[7,25,25],[6,26,26],[5,26.5,26.5],[4,26.8,26.8],[3,27.1,27.1],[2,27.3,27.3],[1,27.5,27.5]]);
var mapping = ROTATIONAL_SURFACE(profile);

var surface = COLOR([0.804,0.31,0.223,1])(MAP(mapping)(domain));

tettoCupola = T([0,2])([10,10])(R([1,2])([-PI/2])(surface));

// disegno il dettaglio sulla punta della cupola

var domain = DOMAIN([[0,1],[0,2*PI]])([10,10]);

var profile = BEZIER(S0)([[1,27.5,27.5],[1,28,28],[0.5,28.4,28.4],[0.2,29,29],[0.1,29.5,29.5],[0,29.6,29.6]]);

var mapping = ROTATIONAL_SURFACE(profile);

var surface = MAP(mapping)(domain);

puntaCupola = COLOR([0.992,0.96,0.901])(T([0,2])([10,10])(R([1,2])([-PI/2])(surface)));

//riunisco tutte le parti della cuola in una sola struttura

var cupola = STRUCT([cilindro,tettoCupola,puntaCupola]);


//riunisco tutto nella struttura front

var front = STRUCT([allfront, border,borderlines,windowDecorations,doorDecorations,glasses,grid,middlewindowframe,upperwindowframe,tetto]);

//mediante delle rototraslazioni dalla prima facciata ottengo il cubo centrale della villa

var ffront = T([0,2])([20,20])(R([0,2])([PI])(front));

var lfront = T([2])([20])(R([0,2])([PI/2])(front));

var rfront = T([0])([20])(R([0,2])([3/2*PI])(front));

// costruisco il pavimento per chiudere il sotto della struttura

var floor = COLOR([0.992,0.96,0.901])(SIMPLEX_GRID([
	[20],
	[1],
	[20]
	]));

var centralPart = STRUCT([front, ffront,lfront,rfront, floor,sottotetto,cupola,camini]);

// Disegno gli ingressi della villa

//Disegno i muretti accanto alle scale

muretto1 = CUBOID([1,1,6]);

muretto2 = T([0,1,2])([0.25,1,0.25])(CUBOID([0.50,0.50,5.75]));

muretto3 = T([0,1,2])([0.27,1.50,0.27])(CUBOID([0.45,0.25,5.73]));

muretto4 =T([0,1,2])([0.27,1.75,0.27])(CUBOID([0.45,1,4.73]));

muretto5 = T([0,1,2])([0.27,2.75,0.27])(CUBOID([0.45,1.25,5.73]));

muretto6 = T([0,1,2])([0.25,3.75,0.25])(CUBOID([0.50,0.25,5.75]));

baseStatua = T([0,1,2])([0.25,4,0.25])(CUBOID([0.50,0.20,0.50]));

var grid1 = POLYLINE([[2.50,2.25,0],[3.50,2.25,0],[2.50,2.25,0]]);

var grid2 = T([1])([0.25])(grid1);

var grid3 = T([1])([0.25])(grid2);

var grid4 = POLYLINE([[2.75,2,0],[2.75,3,0],[2.75,2,0]]);

var grid5 = T([0])([0.25])(grid4);

var grid6 = T([0])([0.25])(grid5);

var rgrid = T([0,1,2])([0.50,-0.25,8.50]) (R([0,2])([PI/2]) (COLOR([0,0,0])(STRUCT([grid1,grid2,grid3,grid4,grid5,grid6]))));

var muretti2 = COLOR([0.803,0.752,0.690])(STRUCT([muretto1,muretto2,muretto3,muretto4, muretto5,muretto6, baseStatua]));

var murettosx = STRUCT([muretti2,rgrid]);

var murettodx = T([0])([7.50])(murettosx);

var muretti = STRUCT([murettodx,murettosx])

//disegno la gradinata

gradino1 = T([0,2])([0.50,0.3])(CUBOID([7.50,0.2,0.3]));

gradino2 = T([0,2])(0.50,0.3)(CUBOID([7.50,0.2,0.3]));

gradino3 = T([0,1,2])([0.50,0.2,0.6])(CUBOID([7.50,0.2,0.3]));

gradino4 = T([0,1,2])([0.50,0.4,0.9])(CUBOID([7.50,0.2,0.3]));

gradino5 = T([0,1,2])([0.50,0.6,1.2])(CUBOID([7.50,0.2,0.3]));

gradino6 = T([0,1,2])([0.50,0.8,1.5])(CUBOID([7.50,0.2,0.3]));

gradino7 = T([0,1,2])([0.50,1,1.8])(CUBOID([7.50,0.2,0.3]));

gradino8 = T([0,1,2])([0.50,1.2,2.1])(CUBOID([7.50,0.2,0.3]));

gradino9 = T([0,1,2])([0.50,1.4,2.4])(CUBOID([7.50,0.2,0.3]));

gradino10 = T([0,1,2])([0.50,1.6,2.7])(CUBOID([7.50,0.2,0.3]));

gradino11 = T([0,1,2])([0.50,1.8,3])(CUBOID([7.50,0.2,0.3]));

gradino12 = T([0,1,2])([0.50,2,3.3])(CUBOID([7.50,0.2,0.3]));

gradino13 = T([0,1,2])([0.50,2.2,3.6])(CUBOID([7.50,0.2,0.3]));

gradino14 = T([0,1,2])([0.50,2.4,3.9])(CUBOID([7.50,0.2,0.3]));

gradino15 = T([0,1,2])([0.50,2.6,4.2])(CUBOID([7.50,0.2,0.3]));

gradino16 = T([0,1,2])([0.50,2.8,4.5])(CUBOID([7.50,0.2,0.3]));

gradino17 = T([0,1,2])([0.50,3,4.8])(CUBOID([7.50,0.2,0.3]));

gradino18 = T([0,1,2])([0.50,3.2,5.1])(CUBOID([7.50,0.2,0.3]));

gradino19 = T([0,1,2])([0.50,3.4,5.4])(CUBOID([7.50,0.2,0.3]));

gradino20 = T([0,1,2])([0.50,3.6,5.7])(CUBOID([7.50,0.2,0.3]));



var gradini = COLOR([0.803,0.752,0.690])(STRUCT([gradino1,gradino2,gradino3,gradino4,gradino5,gradino6,gradino7,gradino8,gradino9,gradino10,gradino11,gradino12,gradino13,gradino14,gradino15,gradino16,gradino17,gradino18,gradino19,gradino20]));

var gradinata = STRUCT([gradini,muretti]);

//Disegno il basamento dell'ingresso

var base1 = CUBOID([1,1,1]);

var base2 = T([0,1,])([0.25,1])(CUBOID([0.50,0.50,1]));

var base3 = T([0,1])([0.27,1.50,])(CUBOID([0.45,2.50,1]));

var basedx = STRUCT([base1,base2,base3]);

var basesx = T([2])([-3])(basedx);

var sottoscalasx = STRUCT([basesx,basedx]);

var sottoscaladx = T([0])([7.52])(sottoscalasx);

var sottoscala = STRUCT([sottoscalasx,sottoscaladx]);

var baseCentrale = T([0,1,2])([0.25,3.50,-3]) (CUBOID([8,0.50,4]));

var basi = STRUCT([sottoscala,baseCentrale]);

var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(10)]);

var c1 = CUBIC_HERMITE(S0)([[0,0,3],[2,0,3],[0,0,4],[0,0,-4]]);

var c2 = CUBIC_HERMITE(S0)([[0,0,4.5],[2,0,4.5],[0,0,0],[0,0,0]]);

var c3 = CUBIC_HERMITE(S0)([[0,1,3],[2,1,3],[0,0,4],[0,0,-4]]);

var c4 = CUBIC_HERMITE(S0)([[0,1,4.5],[2,1,4.5],[0,0,0],[0,0,0]]);

var sur1 = CUBIC_HERMITE(S1)([c1,c2,[0,0,0],[0,0,0]]);

var arcor = R([0,1])([PI/2]) (R([0,2])([PI/2]) (MAP(sur1)(domain)));

var arcodx = T([0,1])([0.25,-0.50])(arcor);

var arcosx = T([0])([8])(arcodx);

var archi = STRUCT([arcodx,arcosx]);

var basamento = COLOR([0.992,0.96,0.901])(T([2])([9]) (STRUCT([basi,archi])));

var gradinataEbasamento = T([0,1,2])([-6,-0.25,-4]) (R([0,1])([PI/2])(R([1,2])([PI/2]) (STRUCT([gradinata,basamento]))));

// Disegno la struttura dell'ingresso

var basesx = CUBOID([1,0.50,6]);

var basedx = T([0])([3])(basesx);

var basi = STRUCT([basedx,basesx]);

var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(10)]);

var c1 = CUBIC_HERMITE(S0)([[0,0,3],[2,0,3],[0,0,4],[0,0,-4]]);

var c2 = CUBIC_HERMITE(S0)([[0,0,4.5],[2,0,4.5],[0,0,0],[0,0,0]]);

var c3 = CUBIC_HERMITE(S0)([[0,1,3],[2,1,3],[0,0,4],[0,0,-4]]);

var c4 = CUBIC_HERMITE(S0)([[0,1,4.5],[2,1,4.5],[0,0,0],[0,0,0]]);

var sur1 = CUBIC_HERMITE(S1)([c1,c2,[0,0,0],[0,0,0]]);

var arco1 = T([0,2])([1,1.50]) (MAP(sur1)(domain));

var arco2 = T([1])([0.50])(arco1);

var arcosx = STRUCT([arco1,arco2,basi]);

var arcodx = T([1])([7.50])(arcosx);

var archi = COLOR([0.992,0.96,0.901])(STRUCT([arcosx,arcodx]));

var solaio = COLOR([0.992,0.96,0.901])(T([2])([6]) (CUBOID([4,8,1.50])));

var decsolaio1 = T([0,1,2])([-0.25,-0.25,6.50]) (CUBOID([4.50,8.50,0.25]));

var decsolaio2 = T([0,1,2])([-0.25,-1,7.50]) (CUBOID([4.50,10,0.25]));

var decsolaio = COLOR([0.992,0.96,0.901])(STRUCT([decsolaio1,decsolaio2]));

var d1 = T([0,1,2])([-0.2,0.1,7.3]) (CUBOID([0.2,0.2,0.2]));

var d2 = T([1])([0.40])(d1);

var d3 = T([1])([0.40])(d2);

var d4 = T([1])([0.40])(d3);

var d5 = T([1])([0.40])(d4);

var d6 = T([1])([0.40])(d5);

var d7 = T([1])([0.40])(d6);

var d8 = T([1])([0.40])(d7);

var d9 = T([1])([0.40])(d8);

var d10 = T([1])([0.40])(d9);

var d11 = T([1])([0.40])(d10);

var d12 = T([1])([0.40])(d11);

var d13 = T([1])([0.40])(d12);

var d14 = T([1])([0.40])(d13);

var d15 = T([1])([0.40])(d14);

var d16 = T([1])([0.40])(d15);

var d17 = T([1])([0.40])(d16);

var d18 = T([1])([0.40])(d17);

var d19 = T([1])([0.40])(d18);

var d20 = T([1])([0.40])(d19);

var d21 = T([0,1])([0.2,-0.3,])(d1);

var d22 = T([0])([0.4])(d21);

var d23 = T([0])([0.4])(d22);

var d24 = T([0])([0.4])(d23);

var d25 = T([0])([0.4])(d24);

var d26 = T([0])([0.4])(d25);

var d27 = T([0])([0.4])(d26);

var d28 = T([0])([0.4])(d27);

var d29 = T([0])([0.4])(d28);

var d30 = T([0])([0.4])(d29);

var d31 = T([0,1])([0.2,0.3])(d20);

var d32 = T([0])([0.4])(d31);

var d33 = T([0])([0.4])(d32);

var d34 = T([0])([0.4])(d33);

var d35 = T([0])([0.4])(d34);

var d36 = T([0])([0.4])(d35);

var d37 = T([0])([0.4])(d36);

var d38 = T([0])([0.4])(d37);

var d39 = T([0])([0.4])(d38);

var d40 = T([0])([0.4])(d39);

var decorazioniFrontali = COLOR([0.992,0.96,0.901])(STRUCT([d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,d30,d31,d32,d33,d34,d35,d36,d37,d38,d39,d40]));

//Disegno il frontone

var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(10)]);

var c1 = CUBIC_HERMITE(S0)([[5,7.75,0],[15,7.75,0],[0,0,0],[0,0,0]]);

var c2 = CUBIC_HERMITE(S0)([[5,7.75,0],[10,10.75,0],[0,0,0],[0,0,0]]);

var sur1 = CUBIC_HERMITE(S1)([c1,c2,[0,0,0],[0,0,0]]);

var frontone = COLOR([0.992,0.96,0.901])(T([1])([-6]) (R([0,2])([PI/2]) (R([0,1])([PI/2]) (MAP(sur1)(domain)))));

//disegno le decorazioni del frontone

var d1 = T([0,1,2])([-0.2,3.5,7])(CUBOID([0.2,0.2,0.2]));

var d2 = T([1])([0.4])(d1);

var d3 = T([1])([0.4])(d2);

var d4 = T([1])([0.4])(d3);

var d5 = T([1])([0.4])(d4);

var d6 = T([1])([0.4])(d5);

var d7 = T([1])([0.4])(d6);

var d8 = T([1])([0.4])(d7);

var d9 = T([1])([0.4])(d8);

var d10 = T([1])([0.4])(d9);

var d11 = T([1])([0.4])(d10);

var d12 = T([1])([0.4])(d11);


var declat = STRUCT([d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12]);

var decorazioniLateralisx = R([1,2])([PI/6]) (declat);

var decorazioniLateralidx = T([1,2])([-2,5.75]) (R([1,2])([-PI/6]) (declat));

var decorazioniLaterali = COLOR([0.992,0.96,0.901])(STRUCT([decorazioniLateralisx,decorazioniLateralidx]));


var domain = DOMAIN([[0,1],[0,2*PI]])([10,10]);

var profile = BEZIER(S0)([[0.3,0.3,0],[0,0,0.02]]);

var mapping = ROTATIONAL_SURFACE(profile);

var surface = MAP(mapping)(domain);

var finestraOvaledx = T([0,1,2])([-0.01,1.50,8.2]) (R([0,2])([-PI/2]) (COLOR([0,1,1,1])(surface)));

var finestraOvalesx = T([1])([5])(finestraOvaledx);

var finestreOvali = STRUCT([finestraOvaledx,finestraOvalesx]);

//disegno la colonna

baseqColonna1 = T([0,1])([-0.50,-0.50]) (CUBOID([1,1,0.2]));

var domain = DOMAIN([[0,1],[0,2*PI]])([10,10]);

var profile = BEZIER(S0)([[0.4,0.4,0],[0.4,0.4,0.2],[0,0,0.21]]);

var mapping = ROTATIONAL_SURFACE(profile);

var surface = MAP(mapping)(domain);

var baserColonna1 = T([2])([0.2])(surface);

var profile = BEZIER(S0)([[0.3,0.3,0],[0.3,0.3,6]]);

var mapping = ROTATIONAL_SURFACE(profile);

var corpoColonna = MAP(mapping)(domain);

var baserColonna2 = T([2])([6])(R([1,2])([PI])(baserColonna1));

var baseqColonna2 = T([0,1,2])([-0.50,-0.50,5.8]) (CUBOID([1,1,0.2]));

var profile = BEZIER(S0)([[0,0,-0.001],[0.3,0.3,0],[0.01,0.01,0.1],[0.01,0.01,0.9],[0.3,0.3,1],[0,0,1.01]]);

var mapping = ROTATIONAL_SURFACE(profile);

var surface = MAP(mapping)(domain);

var decorazioneColonna1 = T([0,1,2])([-0.50,0.25,5.5]) (R([0,2])([PI/2])(surface));

var decorazioneColonna2 = T([1])([-0.50])(decorazioneColonna1);

var colonna1 = T([0,1])([0.5,1.2]) (STRUCT([baseqColonna1,baseqColonna2, baserColonna1,baserColonna2, corpoColonna,decorazioneColonna1,decorazioneColonna2]));

var colonna2 = T([1])([1.1])(colonna1);

var colonna3 = T([1])([1.1])(colonna2);

var colonna4 = T([1])([1.1])(colonna3);

var colonna5 = T([1])([1.1])(colonna4);

var colonna6 = T([1])([1.1])(colonna5);

var colonne = COLOR([0.992,0.96,0.901])(STRUCT([colonna1,colonna2,colonna3,colonna4,colonna5,colonna6]));




//disegno il tetto del frontone

var tetto1 = R([0,1])([PI/6])(CUBOID([6.50,0.50,4]));

var tetto2 = T([0,1])([5.2,3.25])(R([0,1])([-PI/6])(CUBOID([6.50,0.50,4])));

var tettoFrontone = COLOR([0.804,0.31,0.223,1]) (T([1,2])([-1.5,7.50]) (R([1,2])([PI/2]) (R([0,2])([PI/2]) (STRUCT([tetto1,tetto2])))));

//Riunisco tutte le parti dell'ingresso in una struttura

var ingresso1 = T([0,1,2])([-4,4,14]) (R([1,2])([-PI/2]) (STRUCT([gradinataEbasamento,tettoFrontone,decorazioniLaterali,frontone,solaio,decsolaio,archi,decorazioniFrontali,finestreOvali,colonne])));

var ingresso2 = T([2])([20]) (R([0,2])([PI/2])(ingresso1));

var ingresso3 = T([0])([20]) (R([0,2])([-PI/2])(ingresso1));

var ingresso4 = T([2])([20]) (R([0,2])([PI/2])(ingresso2));

var ingressi = STRUCT([ingresso1,ingresso2,ingresso3,ingresso4]);

//Disegno il prato

var prato = T([0,2])([-30,-30]) (COLOR([0,0.392,0])(SIMPLEX_GRID([
	[80],
	[0.1],
	[80]
	])));


// riunisco tutte le parti in un'unica struttura
var laRotonda = STRUCT([centralPart,ingressi,prato]);

DRAW (laRotonda);
