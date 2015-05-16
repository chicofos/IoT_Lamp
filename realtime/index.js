var socketio = require('socket.io');

module.exports = function(server) {

  var io = socketio(server);

  io.on('connection', function(socket){
    console.log('Connected!');

    socket.on('Hello', function(msg){
      console.log('Saying Hello');
    })

    socket.emit('message', "Hello there")

    socket.on('changeStatus', function(status){
      console.log(status);
    })
  });

};