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
        displayResults(cities);
      } else if ((input === "temples") | (input === "temple")) {
        displayResults(temples);
      } else if ((input === "beaches") | (input === "beach")) {
        displayResults(beaches);
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

function displayResults(resultsData) {
  const results = resultsData.map(
    (result) => `
        <div class="card">
            <img src="${result.imageUrl}" class="card-img-top" alt="${result.name}">
            <div class="card-body">
                <h5 class="card-title">${result.name}</h5>
                <p class="card-text">${result.name}</p>
                <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>
        `
  );
  resultDiv.innerHTML = results;
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
