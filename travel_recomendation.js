const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");
const resultDiv = document.getElementById("result");

function searchRecomendation() {
    const input = document.getElementById("recomendationInput").value.toLowerCase();
    resultDiv.innerHTML = "";

    fetch("./travel_recomendation.json")
        .then((response) => response.json())
        .then((data) => {
            const { countries, temples, beaches } = data
            const { cities } = countries.find((item) => item.name.toLowerCase() === input)

            if (cities !== undefined) {
                displayCities(cities)
            } else if (input === "temples" | "temple") {
                displayTemples(temples)
            } else if (input === "beaches" | "beach") {
                displayBeaches(beaches)
            } else {
                resultDiv.innerHTML = "Result not found.";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            resultDiv.innerHTML = "An error occurred while fetching data.";
        });
}
btnSearch.addEventListener("click", searchRecomendation);

function displayCities(citiesData) {
    const cities = citiesData.map((city) => `
        <div class="card" style="width: 18rem;">
            <img src="${city.imageUrl}" class="card-img-top" alt="${city.name}">
            <div class="card-body">
                <h5 class="card-title">${city.name}</h5>
                <p class="card-text">${city.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
    )
    resultDiv.innerHTML = cities
}

function displayTemples(templesData) {
    const temples = templesData.map((temple) => `
        <div class="card" style="width: 18rem;">
            <img src="${temple.imageUrl}" class="card-img-top" alt="${temple.name}">
            <div class="card-body">
                <h5 class="card-title">${temple.name}</h5>
                <p class="card-text">${temple.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
    )
    resultDiv.innerHTML = temples
}

function displayBeaches(beachesData) {
    const beaches = beachesData.map((beach) => `
        <div class="card" style="width: 18rem;">
            <img src="${beach.imageUrl}" class="card-img-top" alt="${beach.name}">
            <div class="card-body">
                <h5 class="card-title">${beach.name}</h5>
                <p class="card-text">${beach.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
    )
    resultDiv.innerHTML = beaches
}
