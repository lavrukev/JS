
// function rashod () {
// 	var q = document.getElementById('lenth');
// 	var w = document.getElementById('width');
// 	var e = document.getElementById('heigh');
// 	alert(q.value*w.value*e.value*12);
// 	// alert('В долларах это' + q+ w+e 'долларов')
// }
// document.getElementById('btn').onclick=rashod;

function rashod1 () {
	var a = document.getElementById('rashod');
	var b = document.getElementById('probeg');
	var benzin = 26;
	var gaz = 12;
	l = 18000/((benzin-1.3*gaz)*probeg.value/rashod.value);
//	alert(15000/((benzin-1.2*gaz)*probeg.value/rashod.value));
	alert(Math.round(l));
}
document.getElementById('summ').onclick=rashod1;


function vremya() {
	var q = document.getElementById('rast');
	var w = document.getElementById('skorost');
	k = (q.value/w.value*1.2);
	alert(k);
}
document.getElementById('rastoyanie').onclick=vremya;

