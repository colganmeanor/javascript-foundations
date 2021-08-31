class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
    this.color = color;
  }
  }
  isWhite() {
     if (this.color === 'white'){
       return true;
     } else {
       return false
     }
  }
  says(saying) {
    return `**;* ${saying} *;**`
  }
}

module.exports = Unicorn;
