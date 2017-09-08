document.getElementById('btn1').onclick = god;
function god() {
	var b = document.getElementById('num1');
	var n = 2017-b;
	var m = 17-b;
	
	if (b>=1900 && b<2000) {
		console.log(n)
	}	
	else if (b>99) {
		console.log()
	}
	
}

document.getElementById('btn2').onclick = ravno;
function ravno() {
	var q = document.getElementById('num2');
	var w = document.getElementById('num2-1');

	if (q==w) {
		console.log('они равны');
	}
	else {
		Math.max(q,w);
	}

}





document.getElementById('btn3').onclick = kvartira;
function kvartira() {
	var a = document.getElementById('num3');

	if (a.value>=1 && a.value<=20) {
		console.log('Первый подъезд');
	}
	else if (a.value>=21 && a.value<=64) {
		console.log('Второй подъезд');
	}
	else if (a.value>=65 && a.value<=80) {
		console.log('Третий подъезд');
	}
	else {
		console.log('Ты вообще не с этого дома');
	}
}