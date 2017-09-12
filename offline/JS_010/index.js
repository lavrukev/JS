// использование переменной this
var div = document.getElementsByTagName('div');
// div.onclick = fillDiv; не сработает
for (var i = 0; i < div.length; i++) {
    div[i].onclick = fillDiv;
}

function fillDiv() {
    this.style.background = 'gold';
    this.getElementsByTagName('p')[0].style.display = 'block';
}