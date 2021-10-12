var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(skier, ticket) {
    var rider = new Skier(skier, ticket);
    if (this.limit > this.skiers.length) {
      if (rider.hasLiftTicket === true) {
        this.skiers.push(rider);
      } else {
        return `Sorry, ${rider.name}. You need a lift ticket!`
      }
    } else {
      return `Sorry, ${rider.name}. Please wait for the next lift!`
    }
  }
  startLift() {
    var difference = this.limit - this.skiers.length
    if (difference === 0) {
      this.safetyBar = 'down';
    } else if (difference === 1){
      return `We still need ${difference} more skier!`
    } else if (difference > 1){
      return `We still need ${difference} more skiers!`
    }
  }
}

module.exports = Lift;
