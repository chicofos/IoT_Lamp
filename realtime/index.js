var socketio = require("socket.io");
var five = require("johnny-five");

module.exports = function(server) {

  var board = new five.Board();
  var io = socketio(server);

  board.on("ready", function(){

    var led = new five.Led({ pin: 11 });
    //always starts in OFF mode
    led.off();

    io.on('connection', function(socket){
      
      console.log('Connected');
      socket.emit('changeStatus', "OFF");

      socket.on('changeStatus', function(status){
        status == "ON" ? led.fadeIn() : led.fadeOut();
      });

    });
    
  });

};