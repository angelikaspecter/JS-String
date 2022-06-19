// 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
const str = "ewrf90^wuirquj!335%2!!";
const sumNumbers = str.match(/\d+/g).join('').length;
const sumLetters = str.match(/[a-z]/gi).join('').length;
const sumSymbols = str.match(/[.\,\?%!@#$^&*(`)]/g).join('').length;
console.log(`Numbers: ${sumNumbers}, Letters: ${sumLetters}, Symbols: ${sumSymbols}`);

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
function numberToText(num) {
    let resultult = "";
    let arrOfStrings = [
        "ноль",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемьнадцать",
        "девятнадцать"
    ];
    if (num >= 10 && num < 20) {
        result = arrOfStrings[num];
    }
    if (num >= 20 && num <= 99) {
        let twoDigitNumber = parseInt(num / 10, 10);
        let oneDigitNumber = num % 10;

        if (twoDigitNumber * 10 === 20 || twoDigitNumber * 10 === 30) {
            if (num % 10 === 0) {
                return arrOfStrings[twoDigitNumber] + "дцать ";
            } else {
                return (
                    arrOfStrings[twoDigitNumber] + "дцать " + arrOfStrings[oneDigitNumber]
                );
            }
        }
        if (twoDigitNumber * 10 === 40) {
            if (num % 10 === 0) {
                return "сорок ";
            } else {
                return "сорок " + arrOfStrings[oneDigitNumber];
            }
        }
        if (twoDigitNumber * 10 === 90) {
            if (num % 10 === 0) {
                return "девяносто ";
            } else {
                return "девяносто " + arrOfStrings[oneDigitNumber];
            }
        }
        if (
            twoDigitNumber * 10 === 50 ||
            twoDigitNumber * 10 === 60 ||
            twoDigitNumber * 10 === 70 ||
            twoDigitNumber * 10 === 80
        ) {
            if (num % 10 === 0) {
                return arrOfStrings[twoDigitNumber] + "десят ";
            } else {
                return (
                    arrOfStrings[twoDigitNumber] + "десят " + arrOfStrings[oneDigitNumber]
                );
            }
        }
    }
    return result;
}
console.log(numberToText(15));
console.log(numberToText(47));
console.log(numberToText(98));

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.


// 4. Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text-align в textAlign.
// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.
// 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.
// 8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.
// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split().
// 10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра. Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.