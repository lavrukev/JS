var city = {
    "c1": {
        "id": 707860,
        "name": "Hurzuf",
        "country": "UA",
        "fullcountry": "Украина",
        // "fullcountry": "Украина"
        "img": "ukraine.png"


    },
    "c2": {
        "id": 519188,
        "name": "Novinki",
        "country": "RU",
        "fullcountry": "Росия",
        // "fullcountry": "Росия"
        "img": "russia.png"
    },
    "c46": {
        "id": 1283378,
        "name": "Gorkhā",
        "country": "NP",
        "fullcountry": "Непал",
        // "fullcountry": "Непал"
        "img": "nepal.png"
    }
};
var div = document.getElementById('out');
var out = '';
for (var key in city) {
    out += `<p>${city[key].name}</p>`;
    out += `<p>${city[key].country}</p>`;
    out += `<p>${city[key].fullcountry}</p>`;
    // out += `<p>${city[key]["fullcountry"]}</p>`;
    out += `<p><img src="images/${city[key].img}"></p>`;




}
div.innerHTML = out;

// формулируем задачу - вывыести ассициативный
// масив в div