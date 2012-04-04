//Questi sono vari pezzi di pavimento poi riuniti in una struttura pavimento

var pavimento1 = SIMPLEX_GRID([
	[39],
	[1],
	[1.5]
	]);

var pavimento2 = SIMPLEX_GRID([
	[1],
	[2],
	[1.5]
	]);

var pavimento3 = SIMPLEX_GRID([
	[-21,15],
	[-1,16],
	[1.5]
	]);

var pavimento4 = SIMPLEX_GRID([
	[-1,20],
	[-10,7],
	[1.5]
	]);

var pavimento5 = SIMPLEX_GRID([
	[-1,8],
	[-17,5],
	[1.5]
	]);

var pavimento6 = SIMPLEX_GRID([
	[-36,11],
	[-4,12],
	[1.5]
	]);

var pavimento7 = SIMPLEX_GRID([
	[-36,3],
	[-16,1],
	[1.5]
	]);

var pavimento8 = SIMPLEX_GRID([
	[-36,16],
	[-4,1],
	[1.5]
	]);

var pavimento9 = SIMPLEX_GRID([
	[-51,1],
	[-5,1],
	[1.5]
	]);

var pavimento10 = SIMPLEX_GRID([
	[-1,0.5],
	[-1,9],
	[1.5]
	]);

var pavimento11 = SIMPLEX_GRID([

	[-50.5,0.5],
	[-5,11],
	[1.5]
	]);

var pavimento12 = SIMPLEX_GRID([
	[-47,4],
	[-15.5,0.5],
	[1.5]
	]);

var pavimento = STRUCT([pavimento1,pavimento2,pavimento3,pavimento4,pavimento5,pavimento6,pavimento7,pavimento8,pavimento9,pavimento10,pavimento11,pavimento12]);

COLOR([0.98,0.98,0.88])(pavimento);

var acqua1 = SIMPLEX_GRID([
	[-1.5,19.5],
	[-1,9],
	[1.2]
	]);

var acqua2 = SIMPLEX_GRID([
	[-47,3.5],
	[-5,10.5],
	[1.2]
	]);

var acqua = STRUCT([acqua1, acqua2]);

COLOR([0, 0.464, 0.48])(acqua);

var gradino1= SIMPLEX_GRID([
	[-36,0.5],
	[-1,3],
	[1.5]
	]);

var gradino2 = SIMPLEX_GRID([
	[-36.5,0.5],
	[-1,3],
	[1.2]
	]);

var gradino3 = SIMPLEX_GRID([
	[-37,0.5],
	[-1,3],
	[0.9]
	]);

var gradino4 = SIMPLEX_GRID([
	[-37.5,0.5],
	[-1,3],
	[0.6]
	]);

var gradino5 = SIMPLEX_GRID([
	[-38,0.5],
	[-1,3],
	[0.3]
	]);

var gradino6 = SIMPLEX_GRID([
	[-38.5,0.5],
	[-1,3],
	[0.001]
	]);	

var gradini = STRUCT([gradino1, gradino2, gradino3, gradino4, gradino5,gradino6]);

COLOR([0.98,0.98,0.88])(gradini);

// Di seguito le pareti poi riunite in una struttura pareti

var parete1 = SIMPLEX_GRID([
    	[-1,7],
    	[-1,0.30],
    	[-1.5,2]
    	]);

var parete2 = SIMPLEX_GRID([
    	[-1,0.30],
    	[-1,21],
    	[-1.5,2]
    	]);

var parete3 = SIMPLEX_GRID([
   	[-1,8],
   	[-21.7,0.30],
   	[-1.5,2]
   	]);

var parete4 = SIMPLEX_GRID([
   	[-8.7,0.30],
   	[-17,5],
   	[-1.5,2]
   	]);

var parete5 = SIMPLEX_GRID([
   	[-6.5, 20],
   	[-15,0.30],
   	[-1.5, 2]
   	]);

var parete6 = SIMPLEX_GRID([
   	[-36,15],
   	[-15.7,0.30],
   	[-1.5, 2]
   	]);

var parete7 = SIMPLEX_GRID([
   	[-50.7,0.30],
   	[-5,11],
   	[-1.5,2]
   	]);

var parete8 = SIMPLEX_GRID([
   	[-30, 21],
   	[-4.7,0.30],
   	[-1.5,2]
   	]);

var pareti = STRUCT([parete1,parete2,parete3,parete4,parete5,parete6,parete7,parete8]);

COLOR([0.564, 0.552, 0.516])(pareti);

// Per divisori intendo le due pareti interne di legno

var divisorio1 = SIMPLEX_GRID([
   	[-37.5,5],
   	[-11.2,0.3],
   	[-1.5,1.7]
   	]);

var divisorio2 = SIMPLEX_GRID([
   	[-25,9],
   	[-7.2,0.30],
   	[-1.5,1.7]
   	]);

var divisori = STRUCT([divisorio1, divisorio2]);

COLOR([0.356, 0.224, 0.156])(divisori);

var pilastri1 = SIMPLEX_GRID([
	[-25.75,0.25,-6.75,0.25],
	[-6.75,0.25,-6.75,0.25],
	[-1.5,1.7]
	]);

var pilastri2 = SIMPLEX_GRID([
	[-38.75,0.25,-6.75,0.25],
	[-6.75,0.25,-6.75,0.25],
	[-1.5,1.7]
	]);

var pilastri = STRUCT([pilastri1,pilastri2]);

COLOR([0.728, 0.712, 0.664])(pilastri);

// Di seguito tutte le pareti di vetro poi rinute in una struttura vetri

var vetro1 = SIMPLEX_GRID([
   	[-30,10],
   	[-13.5,0.3],
   	[-1.5,1.7]
   	]);

var vetro2 = SIMPLEX_GRID([
	[-1,8],
	[-17,0.2],
	[-1.5,2]
	]);

var vetro3 = SIMPLEX_GRID([
	[-5,0.2],
	[-17,1],
	[-1.5,2]
	]);

var vetro4 = SIMPLEX_GRID([
	[-5,0.2],
	[-19,3],
	[-1.5,2]
	]);

var vetro5 = SIMPLEX_GRID([
	[-5,0.5],
	[-20.75,0.2],
	[-1.5,2]
	]);

var vetro6 = SIMPLEX_GRID([
	[-6.5, 2.2],
	[-20.75,0.2],
	[-1.5,2]
	]);

var vetro7 = SIMPLEX_GRID([
	[-7,0.2],
	[-21.5, 0.2],
	[-1.5,2]
	]);

var vetro8 = SIMPLEX_GRID([
	[-31,0.2],
	[-7.7,6],
	[-1.5,2]
	]);

var vetro9 = SIMPLEX_GRID([
	[-32,0.2],
	[-7.7,6],
	[-1.5,2]
	]);

var vetro10 = SIMPLEX_GRID([[-44.75,0.2],
	[-7,7],
	[-1.5,2]]);

var vetri = STRUCT ([vetro1,vetro2,vetro3, vetro4, vetro5, vetro6, vetro7,vetro8,vetro9, vetro10]);

COLOR([0.456, 0.68, 0.672])(vetri);

var pianoPanca = SIMPLEX_GRID([[-6.75,15.5],
	[-14,0.5],
	[-1.5-0.3,0.2]]);

var piediPanca = SIMPLEX_GRID([[-6.75,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5],
	[-14,0.5],
	[-1.5,0.3]]);
var panca = STRUCT([pianoPanca,piediPanca]);

COLOR([0.564, 0.552, 0.516])(panca);

// il tetto1 è quello con il foro rettangolare al centro

var parte1tetto1= SIMPLEX_GRID([[-24,6.5],[-4,13],[-1.5-2,0.3]]); // la parte piu a sx

var parte2tetto1= SIMPLEX_GRID([[-32.5,14.5],[-4,13],[-1.2-2,0.3]]); // la pate piu a dx

var parte3tetto1= SIMPLEX_GRID([[-30.5,2],[-4,3.5,-6,3.5],[-1.5-2,0.3]]); // quello col buco

var tetto1 = STRUCT([parte1tetto1,parte2tetto1,parte3tetto1]);

var tetto2= SIMPLEX_GRID([[0,10],[-14.5,8.5],[-1.5,-2,0.3]]); 

var tetti = STRUCT([tetto1,tetto2]);

COLOR([0.34, 0.32, 0.264])(tetti);

var pavillon = STRUCT([pavimento, acqua,gradini, pareti, divisori, pilastri, vetri,panca, tetti]);

DRAW(pavillon);



