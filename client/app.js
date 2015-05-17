var io = require('socket.io-client');

var socket = io.connect();
var button = document.querySelector('#btn')

socket.on('changeStatus',function(status){
  button.innerText = status;
});

button.addEventListener('click', function(e){
  var text = button.firstChild;
  text.data = text.data == "ON" ? turnOn() : turnOff();
},false);


function turnOff(){
  socket.emit('changeStatus',"OFF");
  return "ON";
}

function turnOn(){
  socket.emit('changeStatus', "ON");
  return "OFF";
}