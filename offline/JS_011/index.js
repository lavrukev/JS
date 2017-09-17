document.querySelector('.one').onmousedown = function() {
    this.style.background = 'red';
}

document.querySelector('.one').onmouseup = function() {
    this.style.background = 'gold';
}

document.querySelector('.one').ondblclick = function() {
    this.style.background = 'lime';
}

document.querySelector('.two').onmouseenter = function() {
    this.style.background = 'brown';
}

document.querySelector('.two').onmouseleave = function() {
    this.style.background = 'white'; // вместо white модно none
}

document.querySelector('.three').oncontextmenu = function(e) {
    e = e || window.e; // для кросбрацзерности
    e.preventDefault();
    this.style.background = 'cyan';
}

// // запретить контекстное меню на всем документе
// document.oncontextmenu = function(e) {
//     e = e || window.e; // для кросбрацзерности
//     e.preventDefault();
//     this.style.background = 'cyan';
// }

var a = 100;
document.querySelector('.five').onmousemove = function() { //собитием будет любое движение мышки
    this.style.width = a + 'px';
    a++
}

var a = 0;
document.querySelector('.six').onmousemove = function() { //собитием будет любое движение мышки
    // this.style.background = 'rgb(50,50,' + a + ')';
    this.style.background = `rgb(50,50,${a})`;
    this.style.width = a + 'px';
    a++;
}

document.querySelector('.seven').onclick = function(e) {
    console.log(e);
}