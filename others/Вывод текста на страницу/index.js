function out () {
	var p = document.getElementById('out');
	// p.innerHTML ='Hello!';

// дописать информацию
		//p.innerHTML += ' Hello 1 ';


p.insertAdjacentHTML('beforeBegin' , '(beforeBegin) параграф перед ');
p.insertAdjacentHTML('afterBegin' , ' (afterBegin) какой-то текст перед ');
p.insertAdjacentHTML('beforeEnd' , ' (beforeEnd) <b>еще какой-то текст после</b>');
p.insertAdjacentHTML('afterEnd' , ' (afterEnd) параграф после Text');
}