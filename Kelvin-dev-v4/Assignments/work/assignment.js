// aasignment: get the state and capital
const continent_2 = [
  {
    africa: {
      nigeria: [
        ["Lagos", "Ikeja"],
        ["Oyo", "Ibadan"],
        ["Kwara", "Ilorin"],
      ],
      ghana: [
        ["G_state_1", "G_city_1"],
        ["G_state_2", "G_city_2"],
        ["G_state_3", "G_city_3"],
      ],
    },
  },

  {
    europe: {
      france: [
        ["F_state_1", "F_city_1"],
        ["F_state_2", "F_city_2"],
        ["F_state_3", "F_city_3"],
      ],
      italy: [
        ["I_state_1", "I_city_1"],
        ["I_state_2", "I_city_2"],
        ["I_state_3", "I_city_3"],
      ],
    },
  },
];

// Solution
function getStateCapital(continentObject, countryInput) {
  const { africa } = continentObject[0];
  const { europe } = continentObject[1];
  //   console.log(africa, europe);

  if (africa.hasOwnProperty(countryInput)) {
    //    console.log(africa[countryInput]);
    for (let [state, capital] of africa[countryInput]) {
      console.log(state, capital);
    }
  } else if (europe.hasOwnProperty(countryInput)) {
    for (let [state, capital] of europe[countryInput]) {
      console.log(state, capital);
    }
  }

  //   for ({ europe } of continentObject) {
  //     console.log(europe);
  //    return countryInput;
  //   }
}

getStateCapital(continent_2, "france");
