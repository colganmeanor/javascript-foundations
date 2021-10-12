var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    }
  }
  gatherMaterials(material, num) {
    this.materials[material] = this.materials[material] + num;
  }
  buildASnowman() {
    var snowperson = new Snowman(this.materials);
    this.snowman = snowperson;
    return snowperson;
  }
  placeMagicHat() {
    if (!this.snowman.magicHat) {
      return 'I guess I didn\'t build it correctly.'
    } else {
      this.snowman.canWearMagicHat();
      return 'Woah, this snowman is coming to life!'
    }
  }
}

module.exports = Human;
