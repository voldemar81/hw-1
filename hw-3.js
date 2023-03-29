let password = 'sun';
let answer = prompt("Введите пароль");
if (answer==="sun") {alert ("Пароль введен верно");} else { alert ("Пароль введен неправильно");}
// задача 1

let c = 3
c > 0 && c < 10 ? console.log("верно") : ("неверно");
// задача 2

let d = 30
let e = 101
d > 100 || e > 100 ? console.log("верно") : ("неверно");
// задача 3

let a = 2;
let b = 3;
alert(a + b);
// задача 4

         
let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) { 
    case "1":
    case "2": 
    case "12":      
        console.log('Сейчас зима'); 
        break;
    case "3":
    case "4": 
    case "5":      
        console.log('Сейчас весна'); 
        break;
    case "6":
    case "7": 
    case "8":      
        console.log('Сейчас лето'); 
        break;
    case "9":
    case "10": 
    case "11":      
        console.log('Сейчас осень'); 
        break;            
    default : console.log('УСЁ!');
        break; 
    }
    // задача 5