// function mM() {
// 	var i = document.getElementById('text');
// 	alert(i.value);
// 	i.value = 77; //выведет в инпут значение 77
// }
// document.getElementById('one').onclick=mM; // функция

function mD () {
	var a = document.getElementById('hrn');
	alert(a.value/26);
}
document.getElementById('usd').onclick=mD;

function rashod () {
	var q = document.getElementById('lenth');
	var w = document.getElementById('width');
	var e = document.getElementById('heigh');
	var l = (q.value*w.value*e.value*12)
	// alert(l);
	alert('Итого выйдет ' + l +  ' кг');
}
document.getElementById('btn').onclick=rashod;

function rashod2 () {
	var z = document.getElementById('lentht');
	var x = document.getElementById('widtht');
	var c = document.getElementById('height');
	// alert((z.value*x.value*c.value*12)/50);
	k = ((z.value*x.value*c.value*12)/50)
	alert('Итого выйдет ' + k +  ' мешков');
}
document.getElementById('btn2').onclick=rashod2;

function funty() {
	var v = document.getElementById('kilo');
	alert(v.value*2.204);
}
document.getElementById('btn3').onclick=funty;