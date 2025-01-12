const input = document.querySelector("#txtSearch");
const download = document.querySelector("#btnSearch");
const CountryDetails = document.querySelector("#country-details");
const Neighbors = document.querySelector("#neighbors");

window.addEventListener('load', () => {
    input.value = "";
})

download.addEventListener("click", () => {
    let inputvalue = input.value;
    getCountry(inputvalue)
});

function getCountry(country) {

    fetch('https://restcountries.com/v3.1/name/' + country)
        .then((üsttekibilgi) => üsttekibilgi.json())
        .then((tamamı) => {
            renderCountry(tamamı[0])

            const countries = tamamı[0].borders.toString()
            console.log(countries)
            return fetch('https://restcountries.com/v3.1/alpha?codes=' + countries)
        })
        .then(response => response.json())
        .then((data) => {
            setTimeout(() => {
                renderNeighbors(data)
            }, 3000)
        });
}




function renderCountry(data) {
    let html = `         
    <div class="card-header">
            Arama Sonucu
        </div>
        <div class="card-body animate__animated animate__backInDown">
            <div class="row">
                <div class="col-4">
                    <img src="${data.flags.png}" alt="" class="img-fluid">
                </div>
                <div class="col-8">
                    <h3 class="card-title">${data.name.common}</h3>
                    <hr>
                    <div class="row">
                        <div class="col-4">Nufüs: </div>
                        <div class="col-8">${(data.population / 1000000).toFixed(1)} milyon</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Resmi Dil: </div>
                        <div class="col-8">${Object.values(data.languages)}</div>
                    </div>
                    <div class="row">
                        <div class="col-4">Başkent: </div>
                        <div class="col-8"> ${data.capital[0]} </div>
                    </div>
                    <div class="row">
                        <div class="col-4">Para Birimi: </div>
                        <div class="col-8"> ${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol}) </div>
                    </div>
                </div>
            </div>
        </div>
`;
    document.querySelector("#country-details").innerHTML = html;
}


function renderNeighbors(data) {
    console.log(data);
    let html = "";
    for (let country of data) {
        html += `
        <div class="col-2 mt-2 animate__animated animate__backInRight">
            <div class="card">
                <img src="${country.flags.png}" class="card-img-top">
                <div class="card-body">
                    <h6 class="card-title">${country.name.common}</h6>
                </div>
            </div>
        </div>
    `;
    }
    document.querySelector("#neighbors").innerHTML = html;
}

