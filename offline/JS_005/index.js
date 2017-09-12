// for (var i=0; i<6; i++) {
// 	document.getElementById('out').innerHTML+=i+'<br>';
// }

// for (var i=0; i<6; i=i+0) {
// 	document.getElementById('out').innerHTML+=i;
// }  //  бесконечный	 цикл


// for (var i=0; i<6; i++) {
// 	document.getElementById('out').innerHTML+=i+' ';
// }



// for (var i=0; i<6; i++) {
// 	document.getElementById('out').innerHTML+=i+' <p> ';
// }

// for (var i=1; i<1001; i++) {
// 	document.getElementById('out').innerHTML+=i+' ';
// }




// есть более адекватная запись, поскольку в первом варианте постоянно get.element



// var p = document.getElementById('out');

// for (var i = 1 ; i<1001;i++) {
// 	p.innerHTML+=i + ' ';
// }

// var o = document.getElementById('out');

// for (var i=999;i>=0;i--) {
// 	o.innerHTML+=i + ' ';
// }


// var u = document.getElementById('out');

// for (var i=0;i<=258;i=i+2) {
// 	u.innerHTML+=i + ' ';
// 	if (i==8) { 
// 		break; 
// 	}
// }


// var y = document.getElementById('out');

// for (var i=0;i<=258;i=i+2) {
// 	if (i==8) { 
// 		break; 
// 	}
// 	y.innerHTML+=i + ' ';

// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var p = document.getElementById('out');

// for (var i=1000;i<=10000;i++) {
// 	p.innerHTML+='&#' + i +';';

// }
// document.getElementById('btn').onclick=ra;


// function ra () {
// 	var a = document.getElementById('out').value;
// 	var b = document.getElementById('out2').value;
// 	var p = document.getElementById('et');

// 	for (var i=a;i<=b;i++) {
// 		p.innerHTML+='&#' + i +';';
// 	}
// }

//вывести 64 раза hello
// var p = document.getElementById('et');

// for (var i=0;i<64;i++) {
// 	p.innerHTML+= 'hello <br>';

// }

// 
var p = document.getElementById('et');
var a = 1;
for (var i = 1; i < 65; i++) {
    //if (a>2048) { 
    //continue; 
    //}
    p.innerHTML += i + ')---' + a + '<br>';
    //	if (a>2048) { 
    //	continue; 
    //}
    a = a * 2
    if (a > 2048) {
        continue;
    }

}