//- створити функцію яка обчислює та
//повертає площу прямокутника зі сторонами а і б
const square = (a ,b) => a * b;
console.log(square(10, 20));


//- створити функцію яка обчислює та
//повертає площу кола з радіусом r
let rad = 0;
let circle = function (radius) {
rad = (radius * radius) * (3.14);
console.log(`Площа круга - ${rad}`);
console.log(`Радиус круга - ${radius}`);
}
circle(12);


// створити функцію яка обчислює та
// повертає площу циліндру висотою h
// та радіутом r
const cylinder = (r, h) => Math.PI * Math.pow(r, 2) * h;
console.log(cylinder(2, 8));


// створити функцію яка приймає масив
// та виводить кожен його елемент
let aaa = ["stroka", true, 21]
let output = function (arr) {
	for (item of arr) {
		console.log(item);
	}
}
output(aaa);


// створити функцію яка створює параграф
// з текстом. Текст задати через аргумент
let paragraph = function (text) {
	document.write(`<p>${text}</p>`);
}

paragraph("Hi");


// створити функцію яка створює ul з трьома
// елементами li. Текст li задати через
// аргумент всім однаковий
let ulll = function (ul, text) {
		document.write(`<ul>`);
			document.write(`<li>${text}</li>`);
			document.write(`<li>${text}</li>`);
			document.write(`<li>${text}</li>`);
		document.write(`</ul>`);
	}
ulll(3, "100");


// створити функцію яка створює ul з трьома
// елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li
// визначається другим аргументом, який
// є числовим (тут використовувати цикл)
let ull = function (li, text) {
		document.write(`<ul>`);
	for (i = 0; i < li; i++) {
			document.write(`<li>${text}</li>`);
	}
		document.write(`</ul>`);
}
ull(3, "100");


// створити функцію яка приймає масив примітивних
// елементів (числа,стрінги,булеві), та будує
// для них список
let primitiv = [1, false, "mani"];
let spisok = function (arr) {
	document.write(`<ul>`);
		document.write(`<li>${arr}</li>`);
	document.write(`</ul>`);
}

spisok(primitiv);


// створити функцію яка приймає масив
// об'єктів з наступними полями
// id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let massiv = [
	{
		id: 123,
		name: "Kris",
		age: 12
	}
];
const doc = function (arr) {
	for (user of arr);
		document.write(`
			<ul>
				<li>${user.id}</li>
				<li>${user.name}</li>
				<li>${user.age}</li>
			</ul>
		`);
}
doc(massiv);


// створити функцію яка повертає
// найменьше число з масиву
numbers = [12, 23, 785, 1, 5, 7];
const num = function (lesser) {
	let min = lesser[0];
		for (item of lesser) {
			if (item < min) {
				min = item;
			}
		}
		return min;
}
console.log(num(numbers));


// створити функцію яка приймає масив
// чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
let num1 = [23, 1, 90];
let num2 = function (num) {
	sum = 0;
	for (item of num) {
		sum += item;
	}
	return sum
}
console.log(num2(num1));














































