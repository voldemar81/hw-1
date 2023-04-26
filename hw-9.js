// function letterСount(row,symb) {
//     return row.split('').filter(el => el === symb).length;
    
// }

// letterСount('cooll','l');
// mission1

// function squareSum(arr) {
//     return arr.map((el) => el **2).reduce((el,it) => el+it);
// }
// console.log(squareSum([2,4,6,1]));

// function squareSum(arr) {
//   const square = arr.map((el) => el **2);
//   const sum = square.reduce((el,it) => el+it);
//   return  sum;
// };
// console.log(squareSum([2,4,6,1]));
// mission2

// function nearestSq(n){
// let near =  Math.round(Math.sqrt(n));
// let res = Math.pow(near, 2);
// return res;
// }
// mission 3 


// function revers(word) {

//     const result = word.split('').reverse().join('');
//     return result;    
    
//     };
    
// console.log(revers('granit'));
// mission 4

// function arrReturn(str) {
//     return str.split(' ').map(el => el +' '+ el.length);
// };

// arrReturn('hello hello hello how are you');
// mission 5

// function mangoDiscount(pieces,price) {
      
//   return (Math.round(pieces/3) * 2 +(pieces % 3)) * price;

// };

// mangoDiscount(10,5);
// mission 6

// function drinkWater(hour) {
//   return (Math.floor(hour * 0.5)); 
 
// };

// drinkWater(6.7)
// mission 7

// function changeSign(arr) {
//   return arr.map((el) => (el >= 0 ? el * -1 : el * -1));
// };

// changeSign([1,-2,3,-4,5]);
// mission 8


// function arrMultiply(n) {
// const result = n.reduce((el,it) => el*it);
// return result;
// };

// console.log(arrMultiply([1, 2, 3, 4]));
// mission 10