var SpazzyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps/2;
  this.step();
};

SpazzyDancer.prototype = Object.create(Dancer.prototype);
SpazzyDancer.prototype.constructor = SpazzyDancer;
SpazzyDancer.prototype.oldStep = Dancer.prototype.step;

SpazzyDancer.prototype.step = function() {
  this.oldStep();
  var randomDistance = Math.random() * 200;
  var randomInterval = this.timeBetweenSteps * Math.random();
  // console.log(randomInterval);
  this.$node.animate({ left: "+=" + randomDistance + "px" }, randomInterval);
  this.$node.animate({ left: "-=" + randomDistance + "px"  }, randomInterval);
};

SpazzyDancer.prototype.lineup = function(array) {
  let lineTop = '80%';
  let lineLeft = 0;
  let widthInterval = ($('body').height() - 100) / array.length;
  let heightInterval = ($('body').width() - 100) / array.length;
  console.log(heightInterval, widthInterval);
  // array.forEach(function(property) {
  //   this.setPosition.call(property, lineTop, lineLeft);
  //   lineLeft += widthInterval;
  //   lineTop += heightInterval;
  // });
  for (let i = 0; i < array.length; i ++) {
    this.setPosition.call(array[i], lineTop, lineLeft);
    lineLeft += widthInterval;
    //lineTop += heightInterval;
  }
};