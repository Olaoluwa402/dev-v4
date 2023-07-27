const { log } = console;
// destructuring

// two types of desctructure - array & object

// array desctructure
//given the following arrays, destructure item the first four items
const arr = [2, "john", [3, 4, 5], { name: "john", age: 20 }, 15, "bola", null];

let [p1, p2, p3, p4] = arr;
// log(p1, p2, p3, p4);

// spread operator during destructure
let [, ...rest] = arr;
// log(rest, "rest");

// get all items in the array below as an array excluding the passwword using spread operator
let arr2 = ["cashew", "password", "orange", "mango", "bannana", "apple"];

let [cg1, , ...data] = arr2;

// strategy one
const final_strategy_1 = cg1 + "," + data;
// log(final_strategy_1.split(","));

// strategy two
let final_strategy_2 = data;
final_strategy_2.unshift(cg1);
// log(final_strategy_2);

const countries = [
  ["Lagos", "Ikeja"],
  ["Oyo", "Ibadan"],
  ["Kwara", "Ilorin"],
];

// for (let [state, capital] of countries) {
//   log(state, capital);
// }

// loop over the following and get the state and capital using destructuring
const continent = [
  {
    africa: [
      ["Lagos", "Ikeja"],
      ["Oyo", "Ibadan"],
      ["Kwara", "Ilorin"],
    ],
  },
];

// shortcut

// for (let [state, capital] of continent[0].africa) {
//   log(state, capital);
// }

// no shortcut
function getStateCapital(continentData, continentName) {
  for (let continent of continentData) {

    console.log(continent);
    if (!continent.hasOwnProperty(continentName)) {
      return "Not a valid continent";
    }
    for (let [state, capital] of continent[continentName]) {
      log(state, capital);
      //   return `${state} ${capital}`;
    }
  }

  // return "";
}

// log(getStateCapital(continent, "africa"));

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
