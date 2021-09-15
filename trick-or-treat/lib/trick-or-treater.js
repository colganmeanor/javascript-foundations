class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false
    this.countCandies = 0;
  }
  putCandyInBag(){
    this.hasCandy = true;
    this.bag.fill();
    this.countCandies++;
  }
  eat(){
    this.countCandies--;
    this.bag.candies.shift();
  }
}

module.exports = TrickOrTreater
