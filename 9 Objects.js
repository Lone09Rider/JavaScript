let name = "KirA";
let age = 30;

let person = {
    name: "KirA",
    age: 30
};  

console.log(person.name);

person.name = "DeatH NotE"
console.log(person.name);

person['name'] = "KirA"
console.log(person.name);


console.log(person["name"]);

let selection = 'new_name';
person[selection] = 'Mary Singh';
console.log(person);
console.log(person.new_name);