//Напишите код, который выведет сумму всех зарплат.

"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var sum = 0;
for (var key in salaries) {
    sum += salaries[key];
}

alert(sum);