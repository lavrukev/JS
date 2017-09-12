
document.getElementById('slider').onchange = changeValue;

function changeValue() {
    var num = document.getElementById('slider').value;
        document.getElementById('out').innerHTML = num;
}