// const student1 = {
//   name: 'Mirco',
//   surname: 'Faro',
//   yob: 1993,
//   gender: 'm',
//   gradesArray: grades
// }

// console.log(student1);


// function calculateStudentMean(student){

//   let sum = 0;
//   for (let i = 0; i < student.gradesArray.length; i++) {
//     const grade = student.gradesArray[i];
//     sum = sum + grade;
//   }
//   const mean = sum / student.gradesArray.length;

//   return mean;
// }

// console.log(calculateStudentMean(student1));

const grades = [10, 7, 4, 9, 10];


const student2 = new Student('Mirco', 'Faro', 1993, 'm', grades);


console.log(student2);


console.log(student2, student2.calculateGradeMean());


const student3 = new Student("Paolo", "Foppiano", 1997, "m", [10, 9, 2]);


console.log(student3.calculateGradeMean());


console.log('età mirco', student2.calculateAge());
console.log("età paolo", student3.calculateAge());


console.log(student2.toString());
console.log(student3.toString());

