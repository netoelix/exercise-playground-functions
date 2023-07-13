const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

const splitSentence = (string) => {
  let newSentence = string.split(' ');
  return newSentence;
};

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
const footballPoints = (wins, ties) => {
  wins *= 3;
  ties *= 1;
  let points = wins + ties;
  return points;
};

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
const addMusics = (artistName, musicName, musicTimer) => {
  let music = {
    artist: artistName,
    music: musicName,
    musicTime: musicTimer,
  };
  playlist.push(music);
  return playlist;
};
// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
const moreExpensive = (data, category) => {
  let product = data[category][0];
  for (let index = 1; index < data[category].length; index += 1) {
    if (product.price < data[category][index].price) {
      product = data[category][index];
    }
  }
  return `O produto mais caro é: ${product.name}, que custa: R$${product.price.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe

const checkItem = (data, category, item) => {
  let productExist = false;
  for (let index = 0; index < data[category].length; index += 1) {
    if (item === data[category][index].name) {
      productExist = true;
    }
  }
  return productExist;
};
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, category, item, price, ingredients, calories) => {
  const productExists = checkItem(data, category, item);
  if (productExists === true) {
    return `O produto: \"${item}\" já existe!`;
  }
  const newProduct = {
    name: item,
    price: price,
    ingredients: ingredients,
    calories: calories,
  }
  data[category].push(newProduct);
  return newProduct;
};
// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
const counterGender = (data) => {
  let men = 0;
  let woman = 0;
  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      men += 1;
    }
    if (data.guests[index].gender === 'female') {
      woman += 1;
    }
  }
  return { male: men,
    female: woman,
  };
};
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

const filterState = (data, state) => {
  let newStates = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    if (state === data.guests[index].address.state) {
      newStates.push(data.guests[index]);
    }
  }
  return newStates;
};

// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data, link) => {
  let newData = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    data.guests[index].picture = link;
    newData.push(data.guests[index]);
  }
  return newData;
};

// Requisito 10 - Crie um função que gera um relatório

const generateDate = (data) => {
  let avgAge = 0;
  let totalAge = 0;
  for (let index = 0; index < data.guests.length; index += 1) {
    totalAge += data.guests[index].age;
  }
  avgAge = totalAge / data.guests.length;
  avgAge = Number(avgAge.toFixed(2));

  return avgAge;
};
const generateCountryes = (data) => {
  let countriesOrganize = [];
  for (let index = 0; index < data.guests.length; index += 1) {
    let countriesNew = data.guests[index].country;
    if (!countriesOrganize.includes(countriesNew)) {
      countriesOrganize.push(countriesNew);
    }
  }
  countriesOrganize.sort();
  return countriesOrganize;
};
const generateReport = (data) => {
  let totalGuests = data.guests.length;
  let totalGender = counterGender(data);

  let newReport = {
    totalGuests,
    totalGender,
    avgAge: generateDate(data),
    countries: generateCountryes(data),
  };
  return newReport;
};
console.log(generateReport(guestsDatabase));
// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
