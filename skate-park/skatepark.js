class SkatePark {
  constructor(park){
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features;
    this.isPrivate = park.isPrivate || false;
    this.cost = park.price || 0;
    this.occupants = [];
  }
  admit(skater){
    if (this.isPrivate === true){
      if (this.cost > skater.money){
        return `Sorry, you don't have enough money.`
      }
      skater.money = skater.money - this.cost;
      if (this.occupants.length >= 3){
        return `Sorry, we are at max capacity. Thank you for understanding.`
      } else {
      this.occupants.push(skater);
      }
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else {
      if (this.occupants.length >= 3){
        return `Sorry, we are at max capacity. Thank you for understanding.`
      } else {
      this.occupants.push(skater);
      }
      return `Welcome to the free ${this.name} Skatepark!`
    }
  }
}


module.exports = SkatePark
