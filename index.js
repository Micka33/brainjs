(function run() { 'use strict';
// https://github.com/harthur/brain
var brain = require('brain');

var net = new brain.NeuralNetwork();

// tired   => between 0 - 2 rate your form
// hungry  => between 0 - 2 rate your apetit
// drunk   => between 0 - 2 rate your alcoholic state
// alone   => true - false  do you hangout with friends or are you alone ?

net.train([
  {input:{tired: 0, hungry: 1, drunk: 0, alone: false}, output:{kebab: 0}},
  {input:{tired: 0, hungry: 2, drunk: 0, alone: true},  output:{kebab: 1}},
  {input:{tired: 0, hungry: 2, drunk: 2, alone: false}, output:{kebab: 1}},
  {input:{tired: 1, hungry: 0, drunk: 0, alone: true},  output:{kebab: 0}},
  {input:{tired: 1, hungry: 0, drunk: 2, alone: true},  output:{kebab: 0}},
  {input:{tired: 1, hungry: 1, drunk: 1, alone: false}, output:{kebab: 1}},
  {input:{tired: 1, hungry: 1, drunk: 0, alone: false}, output:{kebab: 0}},
  {input:{tired: 2, hungry: 2, drunk: 0, alone: true},  output:{kebab: 0}},
  {input:{tired: 2, hungry: 2, drunk: 1, alone: false}, output:{kebab: 1}},
]);

var output = net.run({tired: 0, hungry: 0, drunk: 0, alone: true}); //{ kebab: 0.00023251549058008513 }

console.log(output);
}());
