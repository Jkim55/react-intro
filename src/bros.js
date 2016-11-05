class Bro {
  constructor(name) {
    this.name = name;
  }
  makesNoise() {
    return `Yo, this is ${this.name}. Where the party be?`;
  }
}


module.exports = Bro;
