const data = {
  fronted: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);

console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, "h1 "));
console.log(string.padEnd(12, " Perro "));

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log("Another "+hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();
