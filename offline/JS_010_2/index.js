//TASK1
// Напишите функцию, которая выводит в консоль слово 'Hello’.
// Запустите функцию 333 раза.
var p = document.querySelector('p');

function repeat(n) {
    var i;
    for (i = 0; i < n; i++) {
        console.log(p);
    }
}

// repeat(333);  //закомент что б не мешала
//TASK2
// Напишите функцию, которая возвращает произведение двух
// указанных в качестве параметра чисел.

var x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b;
}
document.querySelector('div').innerHTML = myFunction(4, 3);

//TASK3
// Напишите функцию, которая находит и возвращает максимум
// из двух, заданных в качестве параметров чисел


function maxMinFunction(q, w) {
    return Math.max(q, w);
}
document.querySelector('p').innerHTML = maxMinFunction(4, 3);

//TASK4 
// Напишите функцию, которая возвращает сумму элементов
// массива. Сам массив (индексный) указан в качестве параметра при запуске функции


function returnFunction(mass) {
    var mass = [3, 5, 10];
    return sum
};