let h = 0
while (h < 2) {
    console.log("Привет!");
    h++;
}
// mission 1

let n = 1
while (n <= 5) {
    console.log(n);
    n++;
}
// mission 2

let o = 7
while (o <= 22) {
    console.log(o)
    o++
}
// mission 3

const obj = {
    "Коля" :200,
    "Вася":300,
    "Петя":400

};

for (let sallary in obj) {
     console.log(`${sallary} - зарплата ${obj[sallary]} долларов`);
            
    }
// mission 4

let u = 1000;
let num = 0;
while (u > 50) {
    num++;
    u /= 2;
}
console.log(u)
console.log(num)
// mission 5

for (let friday = 5; friday <= 31; friday+=7) {

    console.log (`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);   

}
// mission 6

