//MIO DOODLE

var pilastri = SIMPLEX_GRID([
	REPLICA(3)([0.15, -6*2.4, 0.15]), // due colonne lungo l'asse x
	[0.15, -6*2.4, 0.15],             // due colonne lungo l'asse y  
	[1.5,3,3]                         // altezza sull'asse z. Uso vettore somma 1.5+3+3
	]);



var travi = SIMPLEX_GRID([
	REPLICA(3)([0.15, -6*2.4, 0.15]), // due travi lungo l'asse x
	[14.7],                           // larghezza della trave lungo asse y. Da un pilastro all'altro (0.15+0.15+6*2.4)
	[-7.15, 1.5]                      // spazio vuoto dentro il palazzo (7.15) e poi spuntano sopra per (1.5)
	]);



//var steelFrames = COLOR([0.2,0.2,0.2])(STRUCT([pilastri,travi])); //coloro di ferro travi e pilastri

var pavimenti = SIMPLEX_GRID([
	REPLICA(3)(14.7),                  //pavimento lungo 14.7 lungo la x
	[-0.15, 14.4, -0.15],             //pavimento largo 14.4 (ovvero sottraggo le y dei pilastri) lungo l'asse y
	[-1.2, 0.3, -2.7, 0.3, -2.7, 0.3] //tre piani di spessore 0.3 e ad altezze 1.5 (1.2+0.3),......etc
	]);



var pavimentiCantilever = SIMPLEX_GRID([
  [0.15,2*2.4,0.15],                  // mensole lungo la x somma 0.15+2*2.4+0.15. Uso vettore somma
  [-0.15,14.4,-0.15],                   //mensole lungo la y. Sottraggo la larghezza delle colonne quindi lungo 14.4
  [-1.2,0.3,-2.7,0.3,-2.7,0.3]          // le metto all'altezza dei pavimenti come una continuazione
]); 



var pilastriCantilever = SIMPLEX_GRID([
	[0.15],                           // definisco la lughezza su x dei pilastri
    [0.15,-14.4,0.15],                // definisco la larghezza dei pilastri su y, 14.4 è lo spazio vuoto fra un pilastro e l'altro
    [1.5,3,3]                         // definisco l'altezza dei pilaastri
]);

var traviCantilever = SIMPLEX_GRID([
  [0.15],                             //lunghezza x delle travi 
  [14.7],                             //larghezza y delle travi 14.7 è proprio la larghezza dell'edificio
  [-7.5,1.5]                          // altezza delle travi. 7.5 è l'altezza dell'edificio
]);


// tutte le componenti CANTILEVER

var cantilever =STRUCT(
	[pavimentiCantilever, pilastriCantilever, traviCantilever]
	);

var cantilever1 = S([0])([-1])(cantilever); //ribalto la x [0] in -1 [-1]

var cantilever2 = T([0])([3*14.7])(cantilever); //traslo la X di 3*14.7 ovvero della lughezza dell'edificio

var grid1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);
var grid2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);
var grid3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);
var panel = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);

var grid = COLOR([0.2,0.2,0.2])(STRUCT([grid1,grid2,grid3]));
var frame = function(color) {return STRUCT([ COLOR(color)(panel), grid])};
var frameGroup = function(number,color) {return STRUCT( REPLICA(number)([ frame(color), T([0])([2.4]) ]))};

var colors = [[1,0,0],[0,1,0],[0,0,1],[0,1,1],[1,0,1],[1,1,0]];
var frames = STRUCT([
  frameGroup(3,colors[0]), T([0])([3*2.4]),
  frameGroup(3,colors[1]), T([0])([3*2.4]), T([0])([0.3]),
  frameGroup(3,colors[2]), T([0])([3*2.4]),
  frameGroup(3,colors[3]), T([0])([3*2.4]), T([0])([0.3]),
  frameGroup(3,colors[4]), T([0])([3*2.4]),
  frameGroup(3,colors[5])
]);

var backFrames = T([1])([14.7])(S([1])([-1])(frames));

DRAW(STRUCT([ pilastri,pavimenti,cantilever1,cantilever2,frames,backFrames ]));
