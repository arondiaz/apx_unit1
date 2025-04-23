const restaurantes = [
  {
    name: "Loló",
    rating: 4.5,
    reviews: 849,
    price: "$$",
    cuisine: "Mexican",
    address: "974 Valencia St",
    description: "Creative Mexican chow in colorful space",
    openUntil: "11:00 PM",
    coordinates: { lat: 37.7569, lng: -122.4211 },
  },
  {
    name: "Eric's Restaurant",
    rating: 4.3,
    reviews: 254,
    price: "$",
    cuisine: "Chinese",
    address: "1500 Church St",
    description: "Chinese food in a casual atmosphere",
    openUntil: "9:30 PM",
    coordinates: { lat: 37.7451, lng: -122.4264 },
  },
  {
    name: "Firefly Restaurant",
    rating: 4.5,
    reviews: 364,
    price: "$$$",
    cuisine: "American",
    address: "4288 24th St",
    description: "Modern comfort food",
    openUntil: "9:00 PM",
    coordinates: { lat: 37.7511, lng: -122.4333 },
  },
];

let i = 0;

while (i < restaurantes.length) {
  console.log(restaurantes[i]);

  i++;
}

for (const restaurante of restaurantes) {
  console.log(restaurante);
}

for (const pos in restaurantes) {
  console.log(pos);
  console.log(restaurantes[pos]);
}




console.log("--------");


let counter = 0;

while(counter < 50){
  console.log(counter);
  counter++
}