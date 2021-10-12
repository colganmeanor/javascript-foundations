const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(person) {
    if (person){
    this.name = person.name;
    this.location = person.area || 'Winterfell';
    this.safe = false;
  }
  }
  sayHouseWords(){
    if (this.safe === false){
    return 'Winter is Coming';
  } else {
    return 'The North Remembers'
  }
  }
  callDirewolf(name, location){
    this.safe = true;
    var direwolf = new Direwolf(name, location)
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf;
  }
}


module.exports = Stark;
