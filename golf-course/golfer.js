class Golfer {
  constructor(golfer){
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.averageScore = 0;
    this.confidence = 0;
  }
  calculateAvg(par){
    this.averageScore = par + this.handicap;
    return `I usually shoot a ${this.averageScore} on average.`
  }
  playRound(golfCourse){
    if (golfCourse.difficulty === 'hard'){
      this.frustration = this.frustration + 500;
    } else if (golfCourse.difficulty === 'moderate'){
      this.frustration = this.frustration + 100;
    }
  }
  hitTheRange(){
    this.confidence = this.confidence + 10;
  }
  marvel(golfCourse){
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }
  whatYaShoot(num){
    if (num < 0){
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if (num === 0){
      this.frustration = this.frustration - 10;
      return 'Booyah!'
    } else {
      this.frustration = this.frustration + 20;
      return 'Doh!'
    }
  }
}

module.exports = Golfer;
