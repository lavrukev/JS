var temp = [1, 2, -5, 50, 532, -485, 3, -43, -52]; 

outArray();
function outArray() {
	var out = '';
	for (var i=0; i<temp.length; i++) {
		if (temp [i] < 0) {
		// if (temp [i] != undefined && temp [i] < 0) 
			out += i + ' --- ' + temp[i] + '<br>';
		}
	}
	document.getElementById('out').innerHTML=out;
}




