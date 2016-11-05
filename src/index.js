// console.log('Hello, World! I\'m working');
// // this is a sanity check

const Cat = require('./cats');

const Toby = new Cat('Toby');
console.log(Toby.meow());

const Bro = require('./bros');

const UptownBro = new Bro('UptownBro');
console.log(UptownBro.makesNoise());
