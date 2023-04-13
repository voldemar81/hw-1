const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
	if (array[i] == 0) break;
	console.log(array[i]);
}
// misson 1

const num = [1, 5, 4, 10, 0, 3];

num.forEach((el, index) => {
	console.log(`${index}: ${el}`);
});
//mission 2

const arr = [1, 3, 5, 10, 20];

console.log(arr.join(' '));
// mission 3

let arrayOne = [];
for (let h = 0; h < 3; h++) {
	arrayOne[h] = []; 
		
	for (let j = 0; j < 3; j++) {
		arrayOne[h][j] = 1;
	}
}
	
console.log(arrayOne);

// mission 4 

const numb = [1, 1, 1];

numb.push(2,2,2);
console.log(numb);
// mission 5

const excess =  [9, 8, 7, 'a', 6, 5];
console.log(excess.sort());
console.log(excess.pop());
console.log(excess);
// mission 6

[9, 8, 7, 6, 5].includes(+prompt('Введите число от 1 до 10'));
// mission 7

const rev = 'abcdef';
  
console.log(rev.split('').reverse( ).join(''));
// mission 8

 let number = [
    [1, 2, 3,],
    [4, 5, 6]
    ]
    
    for (let item of number) {
        for (let i = 0; i < item.length; i++) {
            if (i === 0) {
                console.log(`${item[i]}`);
            } else {
                console.log(`${item[i]}`);
            }
        }
    }
    // mission 9    
    

const ar = [3, 7, 4, 9, 1, 10, 6, 2, 8, 5];

for (let i = 0; i < ar.length -1; i++) {

console.log(ar[i] + ar[i + 1]);
}
// mission 10

function square(k) {
    return k.map((el) => el **2);
}
console.log(square([2,4,6]));
// mission 11

function getLengthWords(arr) {
return arr.map((el) => el.length);
}
console.log (getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
// mission 12

function negativeNumber(n) {
    return n.map((el) => el *-1);
}
console.log(square([2,4,6,8]));
// mission 13

