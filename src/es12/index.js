const aBigNumber = 3007199254740991n;
const anotherBigNumber = BigInt(3007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const primise1 = new Promise((resolve, reject) => reject("Reject"));
const primise2 = new Promise((resolve, reject) => resolve("resolve"));
const primise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([primise1, primise2, primise3]).then((response) =>
  console.log(response)
);

console.log(window);
console.log(globalThis);

const fooo = null ?? 'defaul string';
console.log(fooo);

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('Existe el email');
}else{
    console.log('No tenemos mail')
}
