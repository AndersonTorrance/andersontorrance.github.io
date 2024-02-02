/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
    "LEFT2":65,
    "RIGHT2":68,
    "DOWN2":83,
    "UP2":87,
  };
  var walker = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0,
  }
  var walker2 = {
    "positionX": 0,
    "positionY": 0,
    "speedX": 0,
    "speedY": 0,
  }
  var boardW = $("#board").width();
  var boardH = $("#board").height();
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("Left")
      walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("Right")
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN) {
      console.log("Down")
      walker.speedY = 5;
    }
    if (event.which === KEY.UP) {
      console.log("Up")
      walker.speedY = -5;
    }
    if (event.which === KEY.LEFT2) {
      console.log("Left")
      walker2.speedX = -5;
    }
    if (event.which === KEY.RIGHT2) {
      console.log("Right")
      walker2.speedX = 5;
    }
    if (event.which === KEY.DOWN2) {
      console.log("Down")
      walker2.speedY = 5;
    }
    if (event.which === KEY.UP2) {
      console.log("Up")
      walker2.speedY = -5;
    }
  }
  
function handleKeyUp() {
  walker.speedX = 0;
  walker.speedY = 0;
  walker2.speedX = 0;
  walker2.speedY = 0;
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function repositionGameItem(){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
    walker2.positionX += walker2.speedX;
    walker2.positionY += walker2.speedY;
  }
   function wallCollision(){
   if (walker.positionX > boardW){
    walker.positionX = boardW;
   }
   if (walker.positionX < 0){
    walker.positionX = 0;
   }
   if (walker.positionY > boardH){
    walker.positionY = boardH;
   }
   if (walker.positionY < 0){
    walker.positionY = 0;
   }
   }
  function redrawGameItem(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("bottom", walker.positionY);
    $("#walker").css("right", walker.positionX);
    $("#walker").css("top", walker.positionY);
    $("#walker2").css("left", walker2.positionX);
    $("#walker2").css("bottom", walker2.positionY);
    $("#walker2").css("right", walker2.positionX);
    $("#walker2").css("top", walker2.positionY);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
