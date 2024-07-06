const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");

function searchRecomendation() {
  const input = document.getElementById("recomendationInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  fetch("./travel_recomendation.json")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.countries.find(
        (item) => item.toLowerCase() === input
      );

      if (countries) {
        const cities = countries.cities.forEach(city => {
            
        });
        const prevention = countries.prevention.join(", ");
        const treatment = countries.treatment;

        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
      } else {
        resultDiv.innerHTML = "Condition not found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred while fetching data.";
    });
}
btnSearch.addEventListener("click", searchCondition);
