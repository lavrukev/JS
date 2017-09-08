
document.getElementById('say_hello').onclick = fSayHello;



function fSayHello() {
    var inp = document.getElementById('user_name').value;
    alert('Hello ' + inp);
}