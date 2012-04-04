var perimetro = POLYLINE([[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]]);
COLOR([0,0,0])(perimetro);

var acqua1 = POLYLINE([[1,1],[1,10],[21,10],[21,1],[1,1]]);
COLOR([0,191,255])(acqua1);

var scale = POLYLINE([[36,1],[36,4],[39,4],[39,1],[36,1]]);
COLOR([0,0,0])(scale);

var gradino1 = POLYLINE([[38.5,4],[38.5,1]]);
var gradino2 = POLYLINE([[38,4],[38,1]]);
var gradino3 = POLYLINE([[37.5,4],[37.5,1]]);
var gradino4 = POLYLINE([[37,4],[37,1]]);
var gradino5 = POLYLINE([[36.5,4],[36.5,1]]);
var gradini = STRUCT([gradino1,gradino2,gradino3,gradino4,gradino5]);
COLOR([0,0,0])(gradini);

var acqua2 = POLYLINE([[47,5],[47,16],[51,16],[51,5],[47,5]]);
COLOR([0,191,255])(acqua2);

var muro1 = POLYLINE([[47,16],[38,16]]);
var muro2 = POLYLINE([[41,5],[51,5]]);
var muro3 = POLYLINE([[45.75,6.75],[45.75,14]]);
var muro4 = POLYLINE([[42.5,11.5],[37.5,11.5]]);
var muro5 = POLYLINE([[30,13.5],[40,13.5]]);
var muro6 = POLYLINE([[25,7.5],[34,7.5]]);
var muro7 = POLYLINE([[26.5,15],[6.5,15]]);
var muri = STRUCT([muro1,muro2,muro3,muro4,muro5,muro6,muro7]);
COLOR([0,0,0])(muri);

var rettangolo1 = POLYLINE([[32,7.5],[32,13.5],[31,13.5],[31,7.5],[32,7.5]]);
var rettangolo2 = POLYLINE([[32.5,9],[32.5,12],[33.5,12],[33.5,9],[32.5,9]]);
var rettangoli = STRUCT([rettangolo1,rettangolo2]);

var strutturaPanca = POLYLINE([[7,14],[7,14.5],[22,14.5],[22,14],[7,14]]);
var lineaPanca1 = POLYLINE([[9.5,14],[9.5,14.5]]);
var lineaPanca2 = POLYLINE([[12,14],[12,14.5]]);
var lineaPanca3 = POLYLINE([[14.5,14.5],[14.5,14]]);
var lineaPanca4 = POLYLINE([[17,14],[17,14.5]]);
var lineaPanca5 = POLYLINE([[19.5,14],[19.5,14.5]]);
var panca = STRUCT([strutturaPanca,lineaPanca1,lineaPanca2,lineaPanca3,lineaPanca4,lineaPanca5]);

var colonna1 = POLYLINE([[25.75,6.75],[25.75,7],[26,7],[26,6.75],[25.75,6.75]]);
var colonna2 = POLYLINE([[25.75,13.75],[25.75,14],[26,14],[26,13.75],[25.75,13.75]]);
var colonna3 = POLYLINE([[32.75,6.75],[32.75,7],[33,7],[33,6.75],[32.75,6.75]]);
var colonna4 = POLYLINE([[32.75,13.75],[32.75,14],[33,14],[33,13.75],[32.75,13.75]]);
var colonna5 = POLYLINE([[38.75,6.75],[38.75,7],[39,7],[39,6.75],[38.75,6.75]]);
var colonna6 = POLYLINE([[38.75,13.75],[38.75,14],[39,14],[39,13.75],[38.75,13.75]]);
var colonna7 = POLYLINE([[45.75,6.75],[45.75,7],[46,7],[46,6.75],[45.75,6.75]]);
var colonna8 = POLYLINE([[45.75,13.75],[45.75,14],[46,14],[46,13.75],[45.75,13.75]]);
var colonne = STRUCT([colonna1,colonna2,colonna3,colonna4,colonna5,colonna6,colonna7,colonna8]); 
COLOR([0,50,0])(colonne);


var cubo1 = POLYLINE([[33,12.75],[33,13],[33.25,13],[33.25,12.75],[33,12.75]]);
var cubo2 = POLYLINE([[33,8],[33,8.25],[33.25,8.25],[33.25,8],[33,8]]);
var cubo3 = POLYLINE([[38.75,10.75],[38.75,11],[39,11],[39,10.75],[38.75,10.75]]);
var cubo4 = POLYLINE([[40.75,10.75],[40.75,11],[41,11],[41,10.75],[40.75,10.75]]);
var cubo5 = POLYLINE([[41.5,8.5],[41.5,9],[42,9],[42,8.5],[41.5,8.5]]);
var cubo6 = POLYLINE([[41.5,7.5],[41.5,8],[42,8],[42,7.5],[41.5,7.5]]);
var cubo7 = POLYLINE([[39.625,10.5],[39.625,11],[40.125,11],[40.125,10.5],[39.625,10.5]]);
var cubi = STRUCT([cubo1,cubo2,cubo3,cubo4,cubo5,cubo6,cubo7]); 

var stanza1 = POLYLINE([[1,17],[9,17]]);
var stanza2 = POLYLINE([[5,22],[5,19]]);
var stanza3 = POLYLINE([[5,17],[5,18]]);
var stanza4 = POLYLINE([[7,22],[7,21]]);
var stanza5 = POLYLINE([[5,20],[5.5,20]]);
var stanza6 = POLYLINE([[6.5,20],[9,20]]);
var stanze = STRUCT([stanza1,stanza2,stanza3,stanza4,stanza5,stanza6]);

var pavilon = STRUCT([perimetro,acqua1,scale,gradini,acqua2,muri,rettangoli,panca,colonne,cubi,stanze]);

DRAW(pavilon);