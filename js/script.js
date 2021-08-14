let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let elOl = document.createElement('ol');
document.body.appendChild(elOl);

for (const cityName of cities) {
    let elLi = document.createElement('li');
    //let cityText = document.createTextNode(cityName);
    elLi.innerText = cityName;
    //elLi.appendChild(cityText);
    elLi.setAttribute('class', 'city');
    elOl.appendChild(elLi);
}