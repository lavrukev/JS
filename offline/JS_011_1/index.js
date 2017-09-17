var out1 = document.getElementById('one1');
var out2 = document.getElementById('one2');
document.querySelector('.one').onmousemove = function(e) {
    out1.innerHTML = e.offsetX;
    out2.innerHTML = e.offsetY;

}

document.querySelector('.second').ondblclick = function() {
    this.style.background = 'url(img/folderopen.png)';
    // this.src = "img/folderopen.png";

}

var a = document.getElementById('third');
var b = '<div class="yellow"></div>';

for (i = 0; i < 20; i++) {
    a.innerHTML += b;
}