class LunchBox {
  constructor(box) {
    this.owner = box.owner;
    this.material = box.madeOf;
    this.shape = box.shape;
    this.color = box.color;
    this.snacks = [];
  }
  acquireSnack() {

  }
}

module.exports = LunchBox;
