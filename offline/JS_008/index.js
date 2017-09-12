// console.log(key + "=====" + city[key])
// document.body.innerHTML += " " + key + ": " + city[key][0] + "ppl; " + city[key][1] + " jkh " + " <br> ";
//                              ключ(город) + значение в (город)

var m = [7, [7, 8, 9], 17];
console.log(m[1][2]);

var m2 = [5, { "one": 5, "two": 4000 }, 56];
console.log(m2[1]['two']); //обращаюсь к m2 к 1 елементу масива, его значениею two, которому присвоен 4000. 
// в консоле выведет 4000
console.log(m2[2]);

var m3 = {
    "one": 5,
    "two": [23, 45]
}
console.log(m3['two'][1]);

var m4 = {
    "one": 5,
    "two": {
        "kkk": 23,
        "mmm": 45
    }
}
console.log(m4['two']['mmm']);

var m5 = [{
    "mts": "+380501112233",
    "life": "+380931112233"
}, {
    "mts": "+380504445566",
    "life": "+380934445566"
}];
var out = '';
var out2 = '';
for (key in m5) {
    out += m5[0]['mts'] + ' ';
    out2 += m5[0]['life'] + ' ';
}
console.log(out);
console.log(out2);



var m6 = {
    "phone1": {
        "mts": "+38050556677",
        "life": "+093445566"
    },
    "phone2": {
        "mts": "+38050665544",
        "life": "+093112233"
    }
}
var out = '';
var out2 = '';
var out3 = '';
for (key in m6) {
    out += m6['phone1']['mts'] + ' ';
    out2 += m6['phone1']['life'] + ' ';
}
console.log(out);
console.log(out2);