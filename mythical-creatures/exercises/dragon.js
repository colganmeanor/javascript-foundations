
class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
      if (this.hungry && this.meals < 2){
        this.meals++;
      } else {
        this.hungry = false
      }
    }
  }










module.exports = Dragon;
