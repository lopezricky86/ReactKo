const numbers = [1, 2, 3];
const objectko = [
  { id: 1, name: "ricky", salary: 100 },
  { id: 2, namea: "JUAN", salary: 200 },
  { id: 3, name: "Joe", salary: 300 },
];

const car = { type: "Fiat", model: "500", color: "white" };

const answer2 = objectko.reduce((acc, curr) => {
  return acc + curr.id;
}, 0);

const isPropExists = "type" in car ? true : false;

const answer = objectko.map((x) => console.log("name" in x));

// let yyy = Object.values(Object.fromEntries(
//   ['name', 'address']
//   .filter(key => key in letter)
//   .map(key => [key, letter[key]])
// ))

// let zzz = yyy.length > 0 ? yyy : '';