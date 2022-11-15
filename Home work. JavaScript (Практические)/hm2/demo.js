// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let x = [];
    x[0] = "lisa";
    x[1] = "malina";
    x[2] = "liona";
    x[3] = "karolina";
    x[4] = "fiona";
    x[5] = "karlo";
    x[6] = "simeona";
    x[7] = "hansik";
    x[8] = "hamon";
    x[9] = "rafilo";

console.log(x[0]);
console.log(x[1]);
console.log(x[3]);
console.log(x[4]);
console.log(x[5]);
console.log(x[6]);
console.log(x[7]);
console.log(x[8]);
console.log(x[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "one",
    pageCount: 528,
    genre: "fantasy"
}
let book2 = {
    title: "two",
    pageCount: 540,
    genre: "comedy"
}
let book3 = {
    title: "three",
    pageCount: 555,
    genre: "horror"
}




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: "one",
    pageCount: 528,
    genre: "fantasy",
    authors: [
        {
            name: "liza",
            age: 21
        }
    ]
}
let book5 = {
    title: "two",
    pageCount: 540,
    genre: "comedy",
    authors: [
        {
            name: "milfa",
            age: 20
        }
    ]
}

let book6 = {
    title: "three",
    pageCount: 555,
    genre: "horror",
    authors: [
        {
            name: "kenon",
            age: 19
        }
    ]
}





// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let user = [
    {name: "alexandro", username: "mixer", password: "123qwe"},
    {name: "henesi", username: "saturn", password: "7yrt"},
    {name: "mishko", username: "mars", password: "hfdh5"},
    {name: "benz", username: "kars", password: "g5y56u"},
    {name: "merc", username: "bars", password: "54yrthyrt"},
    {name: "keks", username: "julia", password: "eryg533"},
    {name: "bit", username: "xulio", password: "ehrtjrtt"},
    {name: "senaton", username: "mulio", password: "124w4jrtgfj"},
    {name: "pulavo", username: "pinfix", password: "ergdfg"},
    {name: "handri", username: "mashkin", password: "!3%^Hdh"}
]


console.log(user[0].password);
console.log(user[1].password);
console.log(user[2]["password"]);
console.log(user[3].password);
console.log(user[4]["password"]);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8]["password"]);
console.log(user[9].password);

































