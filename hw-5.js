let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

function minNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

console.log(minNumber(a, b));

  // mission 1

  let c = prompt("Введите число"); 

  function evenOddNumber(c) {
    if (c % 2 === 0 ) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
      }
  }

  console.log(evenOddNumber(c));

   // mission 2.1

   function evenOddNumber(c) {
    return (c % 2 === 0 ? 'Число четное' : 'Число  нечетное')
}
  // mission 2.2

  let d = prompt("Введите число");

  function square(d) {
    return (d * d)
   
 }
 console.log(square(d))

 function numberSquare(d) {
    return (d * d)

 }
 // mission 3

 let userAnswer = prompt ('Сколько вам лет ?');

 function userАge(userAnswer) {

  if (userAnswer < 0) {
  return 'Вы ввели неправильное значение!';
} else if (userAnswer <= 12) {
  return 'Привет, друг!'; 
} else if (userAnswer >= 13) {
  return 'Добро пожаловать!';
} else {
  return 'GAME OVER!';
}
 
 }
 console.log(userАge(userAnswer));

  // mission 4 

let g = prompt("Введите первое число");
let h = prompt("Введите второе число");
 
 function correctNumber(g, h) {
 let e = Number(g)
 let f = Number(h)
  if (e >=0 && f >= 0) {
   return e * f;
  } else if (e < 0 || f < 0) {
   return e * f;
  } else if (e !== isNaN || f !== isNaN) {
    return 'Одно или оба значения не являются числом';
  } 
}

console.log(correctNumber(g, h));
 
// mission 5 

let z = prompt("Введите число");
 
 function cubeAnumber(z) {
 let v = Number(z)
   if (v >=0) {
   return v **3;
  } else if (v < 0) {
   return v **3;
  } else if (v !== isNaN) {
    return 'Переданный параметр не является числом';
  } 
}

console.log(`${z} в кубе равняется ${cubeAnumber(z)}`);

// mission 6

function getCircleArea() {
  return this.radius * 3.14;
}
function getCirclePerimeter() {
  return this.radius * 2 * 3.14;
}

const circle1 = {
  radius: 7,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
}

const circle2 = {
  radius: 8,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// mission 7
