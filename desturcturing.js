const actor = {
    name:'saif',
    age:20,
    phone: '01815060805',
    money:1234556,
};
 
// if right  side is an object left side  of desturcturing will  be  object as well

// use property name  as a variable  that contains the property value 

const {phone,age:boyos} =  actor;
const {name} =  actor;          

// const phone =  actor.phone;
// const name = actor.name;
// const age =  actor.age;


console.log(phone);
console.log(phone);        
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(name);
console.log(name);
console.log(name);
console.log(name);


// array  destructuring 
 const  numbers = [12,1,14,15,16,17];

 const [first, second] = numbers;
console.log(first);
console.log(second);


// Advanced
function doubleThem(a ,b){
    return [a*2 , b*2];
};
 const [prothom ,ditio] =  doubleThem(6 , 9);
 console.log(prothom , ditio);