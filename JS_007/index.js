// outArray(); // строкой запускаем функцию
// function outArray() {
//     var out = '';
//     for (var i = 0; i < temp.length; i++) {
//         if (temp[i] != undefined) {
//             out += i + ' --- ' + temp[i] + '<br>';
//         }
//     }
//     document.getElementById('out').innerHTML = out;
// }
var goods = {
    'name': 'Samsung',
    'cost': '500',
    1: 'hahaha',
    'img': "https://cdn3.iconfinder.com/data/icons/nature-animals/512/cat_A-128.png",
    'hello mama': 5555
}

var div = document.getElementById('out');

var out = '';
for (var key in goods) {
    // out += key + ' ';
    out += goods[key] + ' ';
}
div.innerHTML = out;
div.innerHTML += '<img src="' + goods.img + '">';
div.innerHTML += `<img src="${goods.img}">`; // поддерживается не всеми браузерами. для выхода в продакшн используется специальные трансялторы