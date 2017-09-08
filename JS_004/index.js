// var a = 8;
// var b = 10;
// // console.log(a/b);

// if (b==0) {
// 	// когда истина true
// 	alert('Кто делит на ноль?');
// }
// else {
// 	// когда ложь false
// 	console.log(a/b);

// }
// document.getElementById('btn1').onclick=ravno;

// function ravno () {
// 	var a = document.getElementById('num1');
// 		// var a = document.getElementById('num1').value;
// 		// if (a > 100) 
// 	if (a.value > 100) {         
// 		console.log('Больше');
// 	}
// 	else if (a.value < 100) {
// 		console.log('Меньше')
// 	}
// 	else  {
// 		console.log('Равно');
// 	}
// }

// сначала прописываем что мы будем делать - функцию, схватываем ее
// потом присваиваем некую переменную (для удобства)
// потом пишем if
// else


document.getElementById('btn1').onclick=ravno;

function ravno () {
	var a = document.getElementById('num1');
	if (a.value > 100 && a.value<200) {         
		console.log('Входит');
	}
	else  {
		console.log('Нет');
	}
}