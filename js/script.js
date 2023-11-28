
// const student = {
//     name: 'Paola',
//     age: 30,
//     email: 'paola@email.it',
//     height: 180,
// };

// // ? const name = student.name;
// // ? const age = student.age;
// // ? const email = student.email;
// // ? const height = student.height;
// const { email, age, name} = student;

// console.log(email, age, name);



// function sum(...resto){
//     // ? resto = [];
//     console.log(resto);
// }

// callMe(1,54,22,34,55,' ciao', 'amici', 'amiche', 'mare', true);


const obj = {name: 'palla', peso: 50};
const copyObj = {...obj, colore: 'blue'};
copyObj.name = 'gino';
console.log(obj, copyObj);