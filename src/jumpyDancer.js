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
  this.$node.animate({
    top: '+=200',
    //left: '+=100'
  }, this.timeBetweenSteps);
  this.$node.animate({
    top: '-=200',
    //left: '-=100'
  }, this.timeBetweenSteps);
  this.$node.animate({
    top: '+=200',
    //left: '-=100'
  }, this.timeBetweenSteps);
  this.$node.animate({
    top: '-=200',
    //left: '+=100'
  }, this.timeBetweenSteps);
};

JumpyDancer.prototype.lineup = function (array) {
  //console.log('jumpy?')
  let lineTop = 0;
  let lineLeft = '25%';
  let heightInterval = ($('body').height - 80) / array.length;

  for (let i = 0; i < array.length; i ++) {
    //console.log('array[i]: ' + array[i])
    this.setPosition.call(array[i], lineTop, lineLeft);
    lineTop = lineTop + heightInterval;
  }
};
