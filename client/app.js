var io = require('socket.io-client');

var socket = io.connect();


socket.on('message', function(msg){
  console.log(msg);
})

var button = document.querySelector('#btn')

button.addEventListener('click', function(e){
  
  var text = button.firstChild;
  
  text.data = text.data == "ON" ? turnOff() : turnOn();

},false);

function turnOff(){
  socket.emit('changeStatus',"OFF");
  return "OFF";
}

function turnOn(){
  socket.emit('changeStatus', "ON");
  return "ON";
}