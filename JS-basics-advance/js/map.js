// Map
const { log } = console;
// create a new empty map
const newMap = new Map();
log(newMap);

// size of a map
const size = newMap.size;
log(size);

// adding itema to map

//passing an array - 2D
const mapArr = [
  ["Lagos", "Ikeja"],
  ["Oyo", "Ibadan"],
  ["Ekiti", "Ado"],
];
const mapData = new Map(mapArr);

mapData.set("Kwara", "Ilorin");
log(mapData);

const mapData2 = [
  ["JS", 2],
  ["HTML", 10],
  ["CSS", 5],
];

// Map(4) {
//     'Lagos' => 'Ikeja',
//     'Oyo' => 'Ibadan',
//     'Ekiti' => 'Ado',
//     'Kwara' => 'Ilorin',
//     "JS" => 2,
//     "HTML"=> 10,
//     "CSS" => 5
//   }
