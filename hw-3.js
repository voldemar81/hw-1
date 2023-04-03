let password = 'sun';
let answer = prompt("Введите пароль");
if (answer==="sun") {alert ("Пароль введен верно");} else { alert ("Пароль введен неправильно");}
// задача 1

let c = 3
console.log(c > 0 && c < 10 ? "верно" : "неверно")
// задача 2

let d = 30
let e = 101
console.log(d > 100 || e > 100 ? "верно" : "неверно");
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

let evenNumber = prompt('Пожалуйста, введите любое число');
evenNumber%2 === 0 ? alert("число четное") : ("число нечетное");
    // задача 7

let clientOS = prompt('Для установки приложения,введите-0 если ваша ОС — iOS, введите-1 если ваша ОС — Android');

switch (clientOS) { 
    case "0":
        console.log('Установите версию приложения для iOS по ссылке'); 
        break;
    case "1":
        console.log('Установите версию приложения для Android по ссылке'); 
        break;
    default : console.log('GAME OVER');
        break; 
    }
    // задача 8

    
    let osClient = prompt('Для установки приложения,введите-0 если ваша ОС — iOS, введите-1 если ваша ОС — Android');
    let deviceYear = prompt(Number('Введите год выпуска устройства'));
    
    
    if (osClient === 0) {
        deviceYear = prompt('Введите год выпуска устройства');
        if (deviceYear < 2015) {
            console.log('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            console.log('Установите версию приложения для iOS по ссылке');
        }
    } if (osClient === 1) {
            deviceYear = prompt('Введите год выпуска устройства');
            if (deviceYear < 2015) {
                console.log('Установите облегченную версию приложения для Andriod по ссылке');
            } else {
                console.log('Установите версию приложения для Andriod по ссылке');
                   }       
    }

    // задача 9 -непошла((
