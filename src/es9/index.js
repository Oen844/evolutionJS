const obj = {
  name: "Pau",
  age: 37,
  country: "Barcelona",
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all);

const obj2 = {
  name: "Pau",
  age: 37,
};

const obj3 = {
  ...obj2,
  country: "Barcelona",
};

console.log(obj3);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((Response) => console.log(Response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);


