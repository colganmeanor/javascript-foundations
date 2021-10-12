class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
  for (var i = 0; i < this.snacks.length; i++){
    if (this.snacks[i].name === snack.name){
      return 'Sorry, that snack is already stocked! Try adding a different snack.'
  } else {
    this.snacks.push(snack)
  }
}
}
}

module.exports = VendingMachine;
