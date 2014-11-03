var ForagerBee = function() {
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
  this.job = 'find pollen';
};

ForagerBee.prototype = new Bee();
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};


