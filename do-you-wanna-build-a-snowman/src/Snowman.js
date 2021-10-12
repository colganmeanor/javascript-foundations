class Snowman {
  constructor(snowperson) {
    this.carrots = snowperson.carrots;
    this.coal = snowperson.coal;
    this.buttons = snowperson.buttons;
    this.snowballs = snowperson.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    } else {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
