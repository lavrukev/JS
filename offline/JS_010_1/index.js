// использование переменной this
var navDiv = document.querySelectorAll('nav div'); // собрать внутри nav все div
// div.onclick = fillDiv; не сработает
for (var i = 0; i < navDiv.length; i++) {
    // navDiv[i].onclick = showMenu;
    // navDiv[i].onclick = hideMenu;
    navDiv[i].onmouseenter = showMenu; //наподобие hover
    navDiv[i].onmouseleave = hideMenu; //наподобие hover

}

function showMenu() {
    this.getElementsByTagName('ul')[0].style.display = 'block';
}

function hideMenu() {
    // this.getElementsByTagName('ul')[0].style.display = 'none'; //возвращает первый встречный элемент масива
    this.querySelector('ul').style.display = 'none'; //первый встречный элемент
}