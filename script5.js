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