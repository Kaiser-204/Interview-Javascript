const student =[{id:21, name:"kaiser"},
                {id:31, name:"Lija"},
                {id:41, name:"shafi"}]

// const studentName = [];

// for(let i = 0 ; i<student.length ; i++){
//     const element = student[i];
//     const result =  element.name;
//     studentName.push (result);
// }
// console.log(studentName);
// const names = student.map(s=>s.name);
// console.log(names);

// const id = student.map(s=>s.id)
// console.log(id);

// const id = student.filter(s => s.id > 31);
// console.log(id);

const id = student.find(s => s.id > 31);
console.log(id);