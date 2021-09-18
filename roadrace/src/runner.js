class Runner {
  constructor(name, age){
    this.name = name;
    this.age = age
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(num){
    this.milesRun = this.milesRun + num;
    this.fitness = this.fitness + num;
  }
  stretch(){
    this.fitness = this.fitness + .5;
  }
  runRace(race, miles){
      this.completedRaces.push(race);
      this.runSomeMiles(miles);
  }
}

module.exports = Runner;
