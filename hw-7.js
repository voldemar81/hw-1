const uc = 'привет'
console.log(uc.toUpperCase());
// mission 1

function findWord (array,word) {
return array.map(el => el.toLowerCase()).filter(el => el.startsWith(word))
};

const animals = ['Кошка','Кит','Комар','Носорог','Курица','Слон','Собака','Зебра','Килька','Конь','Кукушка','Соболь'];

console.log(findWord(animals,'сл'));
// mission 2

let n = 32.58884
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));
// mission 3

const numbers = [52, 53, 49, 77, 21, 32];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max,min);
// mission 4


function getRandom(m) {
	let ten = m = 10
	return Math.round(Math.random() * ten);
  }
console.log(getRandom());
// mission 5


let num = Number(prompt('Введите число'));
const arr = [];
for (let i = 0; i < (num / 2); i++) {
	arr[i] = Math.round(Math.random() * num);
}
console.log(arr);
// mission 6


let n1 = Number(prompt('Введите число'));
let n2 = Number(prompt('Введите число'));
function getRandom(n1, n2) {
	return Math.round(Math.random() * (n1 + n2));
  }
console.log(getRandom(n1,n2));
// mission 7

const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let date = myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear();
console.log(date);
// mission 8




let today = new Date();
today.setDate(today.getDate() + 73);
console.log(today);
// mission 9

let todayDate = new Date();
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let fullDate = "Дата: " + todayDate.getDate() + " " + months[todayDate.getMonth()] + " " + todayDate.getFullYear() + " - это " + days[todayDate.getDay()] + ". "; 
let fullTime = "Время: " + todayDate.getHours() + " " + todayDate.getMinutes() + " " + todayDate.getSeconds() + ".";
console.log(fullDate + fullTime); 
// mission 10


function words() {
	let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  
	arr = arr.sort(() => Math.random() - 0.5);
  
	alert(arr);
  
	let answerOne = String(prompt('Назовите первое слово'));
  
	let answerTwo = String(prompt('Назовите последнее слово'));
  
	if (answerOne == arr[0] && answerTwo == arr[arr.length - 1]) {
	  alert('Поздравляю, Вы угадали оба слова');
	} else if (answerOne == arr[0] || answerTwo == arr[arr.length - 1]) {
	  alert('Вы были близки к победе!');
	} else {
	  alert('GAME OVER');
	}
  }

// mission 11
