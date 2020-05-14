//Variables globales
var x=0;
var y=0;
var direccionX=1;
var direccionY=2;

// Siempre recibe un processing
function sketchProc(processing) {
 // función configurar el inicio del juego
 processing.setup = function () {
   processing.frameRate(100);
   processing.size(500,500);
   processing.state=1
 }
 // Dibuja algo en el canvas.
 processing.drawGame= function (world) {
   processing.background(0,0,250,100); 
   processing.fill(200,200,200);
   if(world<=0||world>=(canvas.width-100)){
     direccionX=-direccionX
   }  
   processing.rect(world,(canvas.height/2)-50,100,100);
 }
 processing.draw = function () {
   processing.drawGame(processing.state);
   processing.state = processing.onTic(processing.state);
    };

 // Modifica el mundo de acuerdo al reloj
 processing. onTic = function (world) {
   return x+=direccionX
   
 }
 
 // Modifica el mundo ante un evento del teclado
 processing. onKeyEvent = function (world, keyCode) {
   return world;
 }
 // Modifica el mundo ante un evento del mouse
 processing. onMouseEvent = function (world, event) {
   return world;
 }
}
 var canvas= document.getElementById("area");
 var proInstance = new Processing(canvas, sketchProc);