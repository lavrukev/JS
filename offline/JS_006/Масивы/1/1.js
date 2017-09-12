var t = [];  
var temp = [12, 14, 31, 30, -7]; 
temp[2] = 2222222222;
temp[20] = 11111111111111;
console.log(temp);    // в консоле выведет Array 

// СТАНДАРТНЫЙ ШАБЛОНЫ ВЫВОДЫ МАСИВА

outArray(); // строкой запускаем функцию
function outArray() {
	var out = '';
	for (var i=0; i<temp.length; i++) {
		if (temp [i] != undefined) {
			out += i + ' --- ' + temp[i] + '<br>';
		}
	}
	document.getElementById('out').innerHTML=out;
}




