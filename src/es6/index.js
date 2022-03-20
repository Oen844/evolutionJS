function newFuction(name, age, country) {
  var name = name || "oscar";
  var age = age || 37;
  var country = country || "Barcelona";
  console.log(name, age, country);
}

//es6

function newFuction2(name = "oscar", age = 32, country = "Barcelona") {
  console.log(name, age, country);
}

newFuction2();
newFuction2("Pau", "37", "Madrid");

let hello = "hello";
let world = "world";
let epicPharse = hello + " " + world;
console.log(epicPharse);
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

let lorem =
  "Hola vamos a crear una frase, un texto como estamos \n" +
  "Vamos a meter mas cosas";
let lorem2 = `Otra frase epica que necesitamos
y ahora es otra frase épica`;
console.log(lorem);
console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "Barcelona",
};

console.log(person.name, person.age);
let { name, age, country } = person;
console.log(age, name, country);

let team1 = ["Oscar", "Ricardo", "Julian"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

let name = "Pau";
let age = 37;

obj = {
  name: name,
  age: age,
};
obj2 = { name, age };
console.log(obj2);

const names = [
  {
    name: "Pau",
    age: 37,
  },
  {
    name: "Marc",
    age: 36,
  },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  /****** */
};

const listOfNames4 = (name) => {
  /***** */
};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};
helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
suma = calc.sum(5, 10);
console.log(calc.sum(5, 10));

import {hello}from './module';

hello();

function* helloWorld (){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


