const resultDiv = document.getElementById("result");

function searchRecomendation() {
  const input = document
    .getElementById("recomendationInput")
    .value.toLowerCase();
  resultDiv.innerHTML = "";

  fetch("./travel_recomendation.json")
    .then((response) => response.json())
    .then((data) => {
      const { countries, temples, beaches } = data;
      const findCity = countries.find(
        (item) => item.name.toLowerCase() === input
      );

      if (findCity) {
        const { cities } = findCity;
        displayCities(cities);
      } else if ((input === "temples") | (input === "temple")) {
        displayTemples(temples);
      } else if ((input === "beaches") | (input === "beach")) {
        displayBeaches(beaches);
      } else {
        resultDiv.innerHTML = `
            <div class="alert alert-warning" role="alert">
                Result not found!
            </div>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred while fetching data.";
    });
}

function displayCities(citiesData) {
  const cities = citiesData.map(
    (city) => `
        <div class="card" style="width: 18rem;">
            <img src="${city.imageUrl}" class="card-img-top" alt="${city.name}">
            <div class="card-body">
                <h5 class="card-title">${city.name}</h5>
                <p class="card-text">${city.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
  );
  resultDiv.innerHTML = cities;
}

function displayTemples(templesData) {
  const temples = templesData.map(
    (temple) => `
        <div class="card" style="width: 18rem;">
            <img src="${temple.imageUrl}" class="card-img-top" alt="${temple.name}">
            <div class="card-body">
                <h5 class="card-title">${temple.name}</h5>
                <p class="card-text">${temple.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
  );
  resultDiv.innerHTML = temples;
}

function displayBeaches(beachesData) {
  const beaches = beachesData.map(
    (beach) => `
        <div class="card" style="width: 18rem;">
            <img src="${beach.imageUrl}" class="card-img-top" alt="${beach.name}">
            <div class="card-body">
                <h5 class="card-title">${beach.name}</h5>
                <p class="card-text">${beach.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
  );
  resultDiv.innerHTML = beaches;
}

function clearResults() {
  resultDiv.innerHTML = [];
}

function submitMessage() {
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("messageText").value;

  if (name && email && message) {
    alert("Your message has been sent");
  } else {
    alert("Please fill in all fields correctly.");
  }
}
