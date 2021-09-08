var Snowman = require('./Snowman');

class Human {
  constructor(name, materials){
    this.name = name,
    this.wantsToBuildASnowman = true,
    this.materials = {}
  }
}

module.exports = Human;
