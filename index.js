const person = {
    firstName: "Rima",
    lastName: "sultana",
    age: 20,

};

let txt = " ";

for(let x in person) {
    txt += person[x]+ " ";
}

console.log(txt);