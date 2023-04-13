function reportSeason() {
   let monthNumber = Number(prompt('Введите номер месяца'));
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        return'Сейчас зима';
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return'Сейчас весна';
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return'Сейчас лето';
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return'Сейчас осень';
    } else {
        return'Ошибка! Такого  месяца не существует';
    }
    }
    console.log(reportSeason());

    function words() {
        let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
      
        arr = arr.sort(() => Math.random() - 0.5);
      
        alert(arr[0] + ' ' + arr[6]);
      
        let answerOne = String(prompt('Назовите первое слово'));
      
        let answerTwo = String(prompt('Назовите второе слово'));
      
        if (answerOne.toLowerCase() == arr[0].toLowerCase() && answer2 == arr[6].toLowerCase()) {
          alert('Поздравляю, Вы угадали оба слова');
        } else if (answerTwo.toLowerCase() == arr[0].toLowerCase() || answerTwo == arr[6].toLowerCase()) {
          alert('Вы были близки к победе!');
        } else {
          alert('GAME OVER');
        }
      }