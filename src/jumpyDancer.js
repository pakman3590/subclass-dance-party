var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.oldStep = Dancer.prototype.step;
JumpyDancer.prototype.constructor = JumpyDancer;


JumpyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({top: '200px'});
};

JumpyDancer.prototype.lineup = function (array) {
  let lineTop = 40;
  let lineLeft = $('body').width() / 5;
  let heightInterval = ($('body').height - 80) / array.length;

  for (let i = 0; i < array.length; i ++) {
    this.setPosition.call(array[i], lineTop, lineLeft);
    lineTop = lineTop + heightInterval;
  }
};
