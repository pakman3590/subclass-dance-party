var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep();
  this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function (array) {
  // set starting point
  let lineTop = '20%';
  let lineLeft = 50;
  let widthInterval = ($('body').height() - 100) / array.length;
  // loop again, set style to the starting point
  for (let i = 0; i < array.length; i ++) {
    //  increment starting point by width/blinkyarray.length
    this.setPosition.call(array[i], lineTop, lineLeft);
    lineLeft = lineLeft + widthInterval;
  }
};

// width - 100 / blinkyArray.length