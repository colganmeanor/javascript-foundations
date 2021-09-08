class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.crankyCount = 0;
    this.standing = true;
    this.layingDown = false;
  }
  shootBow() {
    this.crankyCount++;
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
}
  run() {
    this.crankyCount++;
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
    if (this.layingDown = true) {
      return 'NO!'
    }
  }
  sleep(){
    if (this.standing === true && this.layingDown === false){
      return 'NO!'
    } else {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ'
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if (this.layingDown === true){
      return 'Not while I\'m laying down!'
    } else {
    this.cranky = false;
    }
  }
}

  module.exports = Centaur
