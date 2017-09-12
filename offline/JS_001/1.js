// alert ('hello');
console.log ('Hi');

// способ схватить елемент по  идентификатору
//document.getElementById('out');   // весь параграф с его свойствами

var a = document.getElementById('out'); // переменная
console.log(a.id);
a.id = 'two'
console.log(a.id);
console.log(a.innerHTML);


// var b = document.getElementById('body');  ,, обращение по айдишнику
// console.log(b.id);
var bo = document.querySelector('body');  //обращение по селектору
console.log(bo.innerHTML);

bo.innerHTML = '<h1>Hello world</h1>';

var bo = document.querySelector('body');






// сделать общую библиотеку!!!!