// var people = {
//     'name': 'Vladimir',
//     'age': '28',
//     'sex': 'male',
//     'individual namber': '1234567890'
// };
// var div = document.getElementById('out');

// var out = '';
// for (var key in people) {
//     out += `<p>${people[key]}</p>`;
// }
// div.innerHTML = out;


//TASK2
//Выведите его на страницу в формате
// ключ *** значение ключ *** значение
var arr = {
    "c1": {
        "k1": "17w4",
        "k2": "1sfsg7",
        "k3": "17nd",
        "k16": "1237",
        "k14": "1w37",
        "3k1": "1wrw7"
    }

};
var div = document.getElementById('out');
var out = '';
for (var key in arr) {
    out += `<p>${arr[key].k1}</p>`;
    // out += `<p>${arr[key].country}</p>`;
    // out += `<p>${arr[key].fullcountry}</p>`;
    // out += `<p>${arr[key2].3k1}</p>`;
}
div.innerHTML = out;