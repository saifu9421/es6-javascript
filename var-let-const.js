//  var : NO reason to use var 
// let : allow it to reassign 
// const : do not allow it to reassign

const money = 25;
// money = 50;
const rich  =  money + 25;
console.log(rich);

let  count =  0;
count =  count + 10;
console.log(count);


const numbers = [23,4,23,12,56];
// reassign krte prbo na 
// numbers =[4,5,7,8];
 numbers[1] =  55;
 numbers.push(8,9,65);
console.log(numbers);


// object
const student = {
     name: "saifur Rahman saif",
     class: 12,
};
console.log(student);

student.name = "moyer konthi";
console.log(student);


// loop
 let sum = 0
for(i =  0 ; i<=  10 ; i ++){
     console.log(i);
      sum =  sum + i;
};
console.log(sum);