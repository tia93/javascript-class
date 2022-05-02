// // class Student{

// //  constructor(name,  surname, yob, gender){
// // this.name = name;
// // this.surname = surname;
// // this.yob = yob;
// // this.gender = gender;
// //  }
// // }
// const grades = [6,9,7,1]

// const student2 = new Student( "mirco", "faro", 1993, "m", grades);
// console.log(student2)

// function calcolarevotistudenti(student) {    

//     let sum = 0;
//     for (let i= 0; i < student.gradeArray.length; i++) {
//         const grade = student.gradeArray[i];

//         sum = sum + grade;
//     }

//     const mean = sum / student.gradeArray.length

//     return mean;
// }

// console.log(calcolarevotistudenti(student2));


const grades = [6,9,7,1]

const student2 = new Student( "mirco", "faro", 1993, "m", grades);
console.log(student2);

console.log(student2, student2.calculateGradeMen());


const student3 = new Student( "paolo", "faro", 1997, "m", [10,9,5]);


console.log(student3.calculateGradeMen());




console.log("età mirco" , student2.calculateAge)

console.log("età paolo" , student3.calculateAge)


console.log(student2)

console.log(student3)











