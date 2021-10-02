var Cat = require('./cat');
var Lion = require('./lion');

var lion = new Lion('Simba');
var tom = new Cat();

lion.eat(tom);
console.log(lion);