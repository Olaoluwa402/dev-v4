// callbacks

// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = [];
//     if (skills.length == 0) {
//       callback("Did not go well", null);
//     } else {
//       callback(null, skills);
//     }
//   }, 5000);
// };

// const callback = (error, result) => {
//   console.log(error, result);
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(result);
// };

// doSomething(callback);

// using promise
// const finalPromise = Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = [];
//     if (skills.length == 0) {
//       reject("Did not go well");
//     } else {
//       new resolve(skills);
//     }
//   }, 5000);
// });

// finalPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//   API calls fetch API
function getAllCountries() {
  const url = "https://restcountries.com/v2/all";
  // GET, POST,PUT, PATCH, DELETE HEAD, OPTION
  const resultPromise = fetch(url);

  resultPromise
    .then((res) => res.json())
    .then((result) => {
      const countries = result.slice(0, 10);
      console.log(countries);
      const countriesBox = document.querySelector(".countries");
      countries.forEach((c) => {
        const country = document.createElement("div");
        country.className = "country";
        country.innerHTML = `<div>
        <img src= ${c.flag} />
        <p>${c.name}</p>
        </div>`;

        countriesBox.appendChild(country);
      });
    })
    .catch((err) => console.log(err));
  console.log(resultPromise);
}

getAllCountries();

//using axio library and async await

async function getAllCountriesAsyncAwait() {
  const API_KEY = "fbb78052bd44e687a4726295a1ad399e";
  const lat = 33.44;
  const lon = -94.04;

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  //const url = "https://restcountries.com/v2/all";
  try {
    const { data } = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
    );
    console.log("weather");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllCountriesAsyncAwait();
