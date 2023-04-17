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
    