const difference = (x, y ) => x - y;
const multiply = (first , second, third) => first * second * third;



// const getAge =  (person) => person.id;
// const student  ={
//     name:  "saif",
//     age : 34,  
//     id:101,
// }; 
// const age = getAge(student);
// console.log(age);


// single parameter  or one parameter 
const  getAge = (person) => person.age;

const student = {
    name :  "saifur Rahman saif",
    age: 18,
};

const age = getAge(student);
console.log(age);


const getThird =  numbers => numbers[2];
const number  = [12,13,14,15,16];
const num  =  getThird(number);
console.log(num);


const getFur =  array => array[3];
const  fur  =   getFur([12,13,141,15]);
console.log(fur);


const doubleIt = num => num*2;
const doubLe  = doubleIt(2);
console.log(doubLe);


//  No  parameter ;

const getPi = () => Math.PI;
console.log(getPi());


//  large arrow function 
const doMath = (x,y,z) =>  {
      const sum  = x + y + z;
       const milt = x *  y *z;
       const result =  sum +  milt;
       return result;
};
