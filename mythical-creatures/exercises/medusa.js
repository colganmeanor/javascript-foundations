var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var victim = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(victim)
    } else if (this.statues.length >= 3) {
      var freedPerson = new Person(this.statues[0].name, 'relieved')
      this.statues.shift();
      this.statues.push(victim);
    return freedPerson
    }
  }
}

module.exports = Medusa
