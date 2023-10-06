// Array of names
const names = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];

// Array of series
const series = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": [],
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }],
  },
  // ... (remaining series data)
];

// Function to display names using forEach
function displayNames() {
    const namesList = document.getElementById("namesList");
    namesList.innerHTML = "";

    names.forEach(name => {
        const nameItem = document.createElement("p");
        nameItem.textContent = name;
        namesList.appendChild(nameItem);
    });
}

// Function to display series using forEach
function displaySeries() {
    const seriesList = document.getElementById("seriesList");
    seriesList.innerHTML = "";

    series.forEach(item => {
        const seriesItem = document.createElement("p");
        seriesItem.textContent = item.title;
        seriesList.appendChild(seriesItem);
    });
}

// Function to display names with map
function displayNamesWithMap() {
    const namesListWithMap = document.getElementById("namesListWithMap");
    namesListWithMap.innerHTML = "";

    const nameElements = names.map(name => {
        const nameItem = document.createElement("p");
        nameItem.textContent = name;
        return nameItem;
    });

    nameElements.forEach(element => {
        namesListWithMap.appendChild(element);
    });
}

// Function to display series with a rating under 5 using filter
function displayLowRatingSeries() {
    const lowRatingSeriesList = document.getElementById("lowRatingSeriesList");
    lowRatingSeriesList.innerHTML = "";

    const lowRatingSeries = series.filter(item => {
        return item.rating[0] < 5.0;
    });

    lowRatingSeries.forEach(item => {
        const seriesItem = document.createElement("p");
        seriesItem.textContent = item.title;
        lowRatingSeriesList.appendChild(seriesItem);
    });
}

// Function to find the longest string using reduce
function findLongestString() {
    const strings = ["Java", "JavaScript", "Python", "C++", "PHP"];
    const longestString = strings.reduce((longest, current) => {
        if (current.length > longest.length) {
            return current;
        } else {
            return longest;
        }
    }, "");

    const longestStringResult = document.getElementById("longestStringResult");
    longestStringResult.textContent = The longest string is: ${longestString};
}

// Function to display Pokemon names using reduce
function displayPokemonNames(pokemonData) {
    const pokemonNamesList = document.getElementById("pokemonNamesList");
    pokemonNamesList.innerHTML = "";

    const pokemonNames = pokemonData.reduce((names, pokemon) => {
        const name = pokemon.version.name;
        names.push(name);
        return names;
    }, []);

    pokemonNames.forEach(name => {
        const nameItem = document.createElement("p");
        nameItem.textContent = name;
        pokemonNamesList.appendChild(nameItem);
    });
}

// Add event listeners to the buttons
const showNamesButton = document.getElementById("showNamesButton");
showNamesButton.addEventListener("click", displayNames);

const showSeriesButton = document.getElementById("showSeriesButton");
showSeriesButton.addEventListener("click", displaySeries);

const showNamesWithMapButton = document.getElementById("showNamesWithMapButton");
showNamesWithMapButton.addEventListener("click", displayNamesWithMap);

const showLowRatingSeriesButton = document.getElementById("showLowRatingSeriesButton");
showLowRatingSeriesButton.addEventListener("click", displayLowRatingSeries);

const findLongestStringButton = document.getElementById("findLongestStringButton");
findLongestStringButton.addEventListener("click", findLongestString);

const showPokemonNamesButton = document.getElementById("showPokemonNamesButton");
showPokemonNamesButton.addEventListener("click", () => {
    displayPokemonNames(pokemonData);
});


// pokemon data
const pokemonData = [
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },




    {
        "game_index": 76,
        "version": {
          "name": "yellow",
          "url": "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "gold",
          "url": "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "silver",
          "url": "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "crystal",
          "url": "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "ruby",
          "url": "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "sapphire",
          "url": "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "emerald",
          "url": "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "firered",
          "url": "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "leafgreen",
          "url": "https://pokeapi.co/api/v2/version/11/"
        }
      },
    ]
  









// retrive pokemon array
function displayName(pokemonData) {
    return pokemonData.reduce((names, pokemon) => {
        names.push(pokemon.version.name);
        return names;
    }, []);
}


const pokemonNames = displayName(pokemonData);
console.log(pokemonNames);


// Question 13
// a)
var employeeA = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
        document.getElementById("outputA").textContent = "Hi Coach ! " + this.firstName;
    }
}

employeeA.sayHi();

// b)
var employeeB = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.info.hasCar);
        document.getElementById("outputB").textContent = "Car owner? " + this.info.hasCar;
    }
}

employeeB.printInfo();

// c)
var employeeC = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

var address = employeeC.info.printAddress();
console.log(address);
document.getElementById("outputC").textContent = address;

 js