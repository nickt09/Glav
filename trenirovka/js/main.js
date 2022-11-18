// "use strict"
//
// let x = "life";
// let c = "have";
//
// console.log(x + " " + c);
//
// console.log(`${x} privet ${c}`);
//
// let m = 200 > 300;
//
// console.log(m);
//
//
// let v = true;
// console.log(typeof v);
//
//
// let num = 645363
// console.log(typeof (num + " "));   конвертация числа в строку


// let x = "3267846";   конвертация строки в число
// console.log(+ x);


// console.log(!100);  булевые значения. будет false
// console.log(!!"");  булевые значения. будет false
// console.log(!!1);   булевые значения. будет true, потому что true, это 1


// let user = {
//     id: 1,
//     name: "Nikola",
//     age: 23,
//     status: true,
// };
// console.log(user);
// Это объект


// let arr = [1, 2, 3, 4, 5,];
// console.log(arr);
// Это объект



           // Массивы      part - 2
// let arr = [10500, true, "afdsf", [11,22,33,]];
// console.log(arr);
//
// console.log(arr[1]);
//
//
// arr[0] = 35;
//
// console.log(arr[0]);
//
// console.log(arr.length);
//
//
// arr[4] = "joker";
//
// arr[arr.length] = "lime";
//
//
// console.log(arr);
//
//
// let ir = arr[3];
//
//
// console.log(ir[1]);


      // Объекты
// let user = {
//     id: 1,
//     name: "Aleks",
//     status: true,
//     wife:{
//         name: "Anna",
//         age: 21,
//     }
// }
// console.log(user);
//
// console.log(user.id);
//
// console.log(user.wife);
//
// let x = 10
//
// user.wife.name += [" js", 13, x];
//
// console.log(user.wife.name);




// объеты в перемешку
// let party = [
//     {name: 'nikola', age: 23},
//     {name: 'maks', age: 29},
//     {name: 'tokin', age: 28},
//     {name: 'foxt', age: 27},
//     {name: 'dion', age: 25, skills: ["anna", 18]  }
// ];
//
// console.log(party);
//
// console.log(party[3].age);
//
// console.log(party[2].name);
//
//
// console.log(party[4].skills[1]);



// Масив

// let arr = [100500, true, "nomer bul", [11, 22, 13]];
// console.log(arr);
// arr[4] = "hello";
// arr[5] = "okten";
// console.log(arr);
// console.log(arr[4]);
//
// arr[0] = 21;
// console.log(arr[0]);
// console.log(arr.length);
//
// arr[arr.length] = "Royal";
// arr[arr.length] = 999;
//
// console.log(arr);
// console.log(arr.length);
//
// console.log(arr[3]);
//
//
// let innerArray = arr[3];
// console.log(innerArray[1]);
//
// console.log(arr[3][2])




// Объекты
// let user = {
//     id: 1,
//     name: "Vasya",
//     age: 31,
//     status: true,
//     wife:{
//         name: "Anna",
//         age: 21
//     }
// }
// console.log(user);
// console.log(user.id);
// console.log(user["name"]);
// console.log(user.name);
// console.log(user["status"]);
//
//
// console.log(user.wife["name"]);
// console.log(user.wife.age);
//
// // Добавляем характеристику в Объект
// user["control"] = "horosho";
// console.log(user);
//
//
// user.wife["id"] = 1;
// console.log(user.wife);




// // Массив объектов   -   (2)-Запись массива
// let party = [
//     {name: "nikola", age: 21},
//     {name: "tesla", age: 23},
//     {name: "ilona", age: 28},
//     {name: "katya", age: 27},
//     {name: "egor", age: 24, skills: ["js", "miron", "karon"]}
// ];
//
// console.log(party);
// console.log(party[3].age);
//
// console.log(party[4].skills[0]);


// Массив, это объект


// let user = {id: 1, name: "kokos"};
// console.log(user);
//
//
// let customer = user;
// console.log(customer);
//
// customer.age = 31;
// console.log(customer);
// console.log(user);
//
// user.id = 100;
// console.log(user);
// console.log(customer);
//
//
// console.log(typeof {});
// console.log(typeof []);
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));





// let answer = confirm("Тебе есть 18+  ?");
//
//
//
//
//
// if (answer) {
//     document.write("<h1>CORN</h1>");
// }else{
//     document.write("<h1>Carton</h1>");
// }
//



// Операторы if, else, elif
// let age = +prompt("Тебе есть 18+  ?");
//
// if (age < 18) {
//     document.write("<h1>Mult</h1>");
// } else if (age >= 18 && age <  90) {
//     document.write("<h1>corn hub</h1>");
// } else if (age >= 90) {
//     document.write("<h1>casablanka</h1>");
// } else {
//     document.write("<h1>Не верный ввод</h1>");
// }




// Операторы if, else, elif (2)
// let color = prompt("color");
// let roadStatus = confirm("road is clear");
//
// if (color === "green" || roadStatus) {
//     console.log("goooooo");
// } else if (color === "yellow") {
//     console.log("wait");
// } else if (color === "red") {
//     console.log("stop");
// }




// let x;
//
// if (true) {
//     x = 100;
// } else {
//     x = -100
// }
//
// console.log(x);



// Тернарный оператор
// let y = confirm("what?") ? 100 : -100;
// console.log(y);



// Проверка
// if (1) {
//     console.log("good");
// } else {
//     console.log("hai");
// }



// Проверка
// let arr = [];
//
// if (arr.length !== 0) {
//     console.log("array")
// }else {
//     console.log("noy array");
// }



// Инструкция switch
// switch ("red") {
//     case "green":
//         console.log("go");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     case "red":
//         console.log("stop");
//         break;
//     default:
//         console.log("?????????");
// }




// let xxx = prompt() || "ne polusholos" ;
// console.log(xxx);



//Дз
// let data = +prompt();
// switch (data) {
//     case 1:
//         console.log("English");
//         break;
//     case 2:
//         console.log("C++");
//         break;
//     case 3:
//         console.log("Deutsch");
//         break;
//     case 4:
//         console.log("Python");
//         break;
//     case 5:
//         console.log("JS");
//         break;
//     case 6:
//         console.log("PHP");
//         break;
//     case 7:
//         console.log("Italian");
//         break;
//     default:
//         console.log("Не вернный ввод");
// }




// let a = +prompt();
// let b = +prompt();
// if (a > b) {
//     console.log(a + " - Это число больше чем b");
// } else if (b > a) {
//     console.log(b + " - Это число больше чем a");
// } else if (a === b) {
//     console.log("Числа равны");
// } else {
//     console.log("Не вернный ввод");
// }



// Абстракное задание
// let x = +prompt() || "default"
// console.log(x);


// Задание с массивом и циклами
// let users = [
//     {name: "Inna", age: 23, status: true},
//     {name: "Katya", age: 12, status: false},
//     {name: "Marya", age: 32, status: false},
//     {name: "Masha", age: 23, status: true},
//     {name: "Misaha", age: 45, status: false},
//     {name: "Kolya", age: 55, status: true},
//     {name: "Volodia", age: 67, status: false},
//     {name: "Kent", age: 34, status: true},
//     {name: "Nikola", age: 44, status: false},
//     {name: "Emfodii", age: 43, status: true}
// ];
// console.log(users[9].age);
//
//
// for (let user of users) {
//     document.write(`
//         <div class="baza">
//             <h2>${user.name}</h2>
//             <p>${user.age} ${user.status}</p>
//         </div>`);
//
// }



let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(
        `
<div class="menu">
    <h2>Название - ${product.title} Цена - ${product.price}</h2>
    <img class="immm" src="${product.image}" alt="${product.title}">
</div>
        `
    )
}











































































