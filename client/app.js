var io = require('socket.io-client');

var socket = io.connect();
var button = document.querySelector('#btn')
var text =  document.querySelector('#text')

socket.on('changeStatus',function(status){
  button.className = getClass(status);
});

button.addEventListener('click', function(e){

  e.preventDefault();

  if(button.className == "banner"){
   turnOff();
   text.innerText = "Turn the lights ON"
  }
  else{
    turnOn();
    text.innerText = "Turn the lights OFF"
  }
},false);

function getClass(status){
  return status == "ON" ? "banner" : "banner addGray";
}
function setClass(name){
  button.className = name;
}

function turnOff(){
  console.log("turning off");
  socket.emit('changeStatus',"OFF");
  setClass("banner addGray");
}

function turnOn(){
  console.log("turning on")
  socket.emit('changeStatus', "ON");
  setClass("banner");
}