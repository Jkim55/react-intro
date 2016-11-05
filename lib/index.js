'use strict';

// console.log('Hello, World! I\'m working');
// // this is a sanity check

var Cat = require('./cats');

var Toby = new Cat('Toby');
console.log(Toby.meow());

var Bro = require('./bros');

var UptownBro = new Bro('UptownBro');
console.log(UptownBro.makesNoise());