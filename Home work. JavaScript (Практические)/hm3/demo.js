// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть
//     'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 22;

if (x !== 0) {
    console.log("Верно");
} else {
    console.log("Не верно");
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати
// код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 38;
if (time >= 0 && time <= 15) {
    console.log(time, "Время попадает в первую четверть");
} else if (time >= 16 && time <= 30) {
    console.log(time, "Время попадает во вторую четверть");
} else if (time >= 31 && time <= 45) {
    console.log(time, "Время поопадает в третью четверть");
} else if (time >= 46 && time <= 59) {
    console.log(time, "Время попадает в четвертую четверть");
} else {
    console.log(time, "Не вернный ввод");
}




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day > 0 && day <= 10) {
    console.log(day, "Декада 1");
} else if (day >= 11 && day <= 20) {
    console.log(day, "Декада 2");
} else if (day >= 21 && day <= 31) {
    console.log(day, "Декада 3");
} else {
    console.log(day, "Не вернный ввод");
}




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
let data = +prompt();
switch (data) {
    case 1:
        console.log("English");
        break;
    case 2:
        console.log("C++");
        break;
    case 3:
        console.log("Deutsch");
        break;
    case 4:
        console.log("Python");
        break;
    case 5:
        console.log("JS");
        break;
    case 6:
        console.log("PHP");
        break;
    case 7:
        console.log("Italian");
        break;
    default:
        console.log("Не вернный ввод");
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt();
let b = +prompt();
if (a > b) {
    console.log(a + " - Это число больше чем b");
} else if (b > a) {
    console.log(b + " - Это число больше чем a");
} else if (a === b) {
    console.log("Числа равны");
} else {
    console.log("Не вернный ввод");
}




//     - є змінна х, яка може прийняти будь-яке значення
//     (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення
//         "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let z = +prompt() || "default"
console.log(z);

































