const max  =  Math.max(6,35,767,13,567,23,46,56,45,34);


const numbers = [2,3,4,5,6,7,84,66,45,56,78];
const arrayMax =  Math.max(...numbers);
//   console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy 

const nums = [5,5,58,9];
const nums2  = [...nums];   // copy 
nums2.push(100);
console.log(nums);
console.log(nums2);

const  sonkha  = [...nums , 999];  // add extra elements while copy 
console.log(sonkha); 

const name =  ['saif','asif','sakib'];
 console.log(...name , 'akib');