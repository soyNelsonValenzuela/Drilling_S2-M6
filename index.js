//importa el paque te lodash para su uso
const _ = require('lodash');

//importa las variables creadas en el archivo datos.js
let {cars,animals }= require ('./datos');

//creamos un nuevo array en el cual contiene solo datos unicos, 
//eliminando los repetidos mediante el metodo _.uniq del paquete lodash
let carsNoRepeat = _.uniq(cars);

//Usando el metodo _.find 
// este metodo trae el primer elemento que coincide con nuestra busqueda
let wildAnimal = _.find(animals,{type: 'salvaje'})

// Usando el metodo _.filter 
// este metodo trae todos los elementos que coinciden con nuestra busqueda
let wildAnimals = _.filter(animals,{type: 'salvaje'})

// Usando el metodo _.map
// este metodo trae todos los elementos que coinciden con nuestra busqueda y los transforma en
// un nuevo array con la estructura que le indiquemos
let animalsName = _.map(animals, 'name')

console.log('-- Metodo uniq --');
console.log(carsNoRepeat);
console.log('-- Metodo find --');
console.log(wildAnimal);
console.log('-- Metodo filter --');
console.log(wildAnimals);
console.log('-- Metodo map --');
console.log(animalsName);

