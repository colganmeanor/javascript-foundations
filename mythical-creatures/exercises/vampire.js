class Vampire {
  constructor(name, pet){
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true
    this.ouncesDrank = 0
  }
  drink(){
    this.thirsty = false;
    if (this.ouncesDrank < 50){
      this.ouncesDrank = this.ouncesDrank + 10;
    } else {
      this.thirsty = false
    }
    return 'I\'m too full to drink anymore!'
  }
    // drink(){
    //   if (this.thirsty = false && this.ouncesDrank >= 50){
    //     return 'I\'m too full to drink anymore!'
    //   } else {
    // this.ouncesDrank = this.ouncesDrank + 10;
    //    }
    // }
}








module.exports = Vampire
