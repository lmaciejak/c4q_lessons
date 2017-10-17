// const fs = require('fs');

// fs.readFile('student.json', (err, data) => {  
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

// console.log('This is after the read call, but executed FIRST!');

// var student = {  
//     name: 'Mike',
//     age: 23,
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda'
// };

// console.log(JSON.stringify(student, null, 2))

// s.writeFile('student-3.json', data, (err) => {  
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');






const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};

let data = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');