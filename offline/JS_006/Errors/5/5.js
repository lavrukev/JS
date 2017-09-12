 document.getElementById('create-block').onclick = fCreateBlock;

 function fCreateBlock() {
    var st = '<div class="block"></div>';
        // var st = "<div class=\"block\"></div>";    СИМВОЛ ЭКРАНИРОВАНИЯ!!!!! - ЕСЛИ ПРИМЕНЯЕМ ОДИНАКОВЫЕ КАВЫЧКИ ПО ВСЕМУ КОДУ
    for (var i=0; i<50; i++) {
        document.getElementById('out').innerHTML += st;
        }
    }
