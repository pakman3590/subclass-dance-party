// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //var dancer = {};
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  console.log(`top: ${top}, left: ${left}, time: ${timeBetweenSteps}`);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {
  // declare a starting point,
  // loop through dancer array
  // give them all same value on one axis
  // tell each object to lineup

};

/*// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //var dancer = {};
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  //console.log(`top: ${top}, left: ${left}, time: ${timeBetweenSteps}`);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
  //return dancer;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {
  // declare a starting point,
  // loop through dancer array
  // give them all same value on one axis
  // tell each object to lineup

};

*/