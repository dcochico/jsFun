const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(kitties) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']
    return kitties.filter(cat => cat.color === 'orange').map(cat => cat.name);
  },

  sortByAge(kitties) {
    // Sort the kitties by their age
    return kitties.sort((a, b) => b.age - a.age);
    // Annotation:
    // if compareFn(a, b) < 0, then a before b
    // if compareFn(a, b) > 0, then b before a
    // if compareFn(a, b) === 0, then keep same order
  },

  growUp(kitties) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    return kitties.map(cat => ({name: cat.name, age: cat.age + 2, color: cat.color}));
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    const members = {};
    clubs.forEach(club => {
      club.members.forEach(member => {
        if (!members[member]) {
          members[member] = [];
        }
        members[member].push(club.club);
      });
    });
    return members;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod(mods) {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    return mods.map(mod => ({mod: mod.mod, studentsPerInstructor: mod.students / mod.instructors}));
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake(cakes) {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    return cakes.map(cake => ({flavor: cake.cakeFlavor, inStock: cake.inStock}));
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock(cakes) {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    return cakes.filter(cake => cake.inStock);
    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory(cakes) {
    // Return the total amount of cakes in stock e.g.
    // 59
    return cakes.reduce((sum, cake) => sum + cake.inStock, 0);
    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings(cakes) {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    const toppings = cakes.reduce((total, cake) => [...total, ...cake.toppings], []);
    return toppings.filter((topping, i) => toppings.indexOf(topping) === i);
    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList(cakes) {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    const groceryList = {};
    cakes.forEach(cake => cake.toppings.forEach(topping => {
      if (!groceryList[topping]) {
        groceryList[topping] = 1;
      } else {
        groceryList[topping]++;
      }
    }));
    return groceryList;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms(classrooms) {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    return classrooms.filter(classroom => classroom.program === 'FE');
    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities(classrooms) {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    return {
      feCapacity: classrooms.filter(classroom => classroom.program === 'FE').reduce((total, classroom) => total + classroom.capacity, 0),
      beCapacity: classrooms.filter(classroom => classroom.program === 'BE').reduce((total, classroom) => total + classroom.capacity, 0)
    }
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity(classrooms) {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    return classrooms.sort((a, b) => a.capacity - b.capacity);
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
    return books.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime').map(book => book.title);
    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    return books.filter(book => book.published >= 1990).map(book => ({title: book.title, year: book.published}));
    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    return books.filter(book => book.published > year).map(book => ({title: book.title, year: book.published}));
    // Annotation:
    // Write your annotation here as a comment
  }

};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps(weather) {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    return weather.map(x => (x.temperature.high + x.temperature.low) / 2);
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots(weather) {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    return weather.filter(x => x.type === 'sunny' || x.type === 'mostly sunny').map(x => `${x.location} is ${x.type}.`);
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity(weather) {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    return weather.reduce((max, loc) => loc.humidity > max.humidity ? loc : max);
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList(nationalParks) {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    return {
      parksToVisit: nationalParks.filter(park => !park.visited).map(park => park.name),
      parksVisited: nationalParks.filter(park => park.visited).map(park => park.name)
    };
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState(nationalParks) {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    return nationalParks.map(park => {
      newPark = {};
      newPark[park.location] = park.name;
      return newPark;
    });
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities(nationalParks) {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]
    const activities = nationalParks.reduce((total, park) => [...total, ...park.activities], []);
    return activities.filter((activity, i) => activities.indexOf(activity) === i);
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount(breweries) {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    return breweries.reduce((sum, brewery) => sum + brewery.beers.length, 0);
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount(breweries) {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]
    return breweries.map(brewery => ({name: brewery.name, beerCount: brewery.beers.length}));
    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5
    return breweries.filter(brewery => brewery.name === breweryName).reduce((total, brewery) => total + brewery.beers.length, 0);
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer(breweries) {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    return breweries.map(brewery => brewery.beers).reduce((total, beers) => [...total, ...beers], []).reduce((max, beer) => beer.abv > max.abv ? beer : max, {abv: 0});
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
    return boardGames[type].map(game => game.name);
    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]
    return boardGames[type].map(game => game.name).sort();
    // return games.sort((a, b) => a.charAt[0] - b.charAt[0]);
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
    return boardGames[type].reduce((best, game) => game.rating > best.rating ? game : best);
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.
    return boardGames[type].reduce((sum, game) => sum + game.rating, 0) / boardGames[type].length;
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.
    return boardGames[type].filter(game => game.maxPlayers === maximumPlayers).reduce((sum, game) => sum + game.rating, 0) / boardGames[type].filter(game => game.maxPlayers === maximumPlayers).length;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor(instructors, cohorts) {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    return instructors.map(instructor => ({name: instructor.name, studentCount: cohorts.filter(cohort => cohort.module === instructor.module)[0].studentCount}));
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor(instructors, cohorts) {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 15,
    // cohort1804: 7
    // }
    const obj = {};
    cohorts.forEach(cohort => obj[`cohort${cohort.cohort}`] = cohort.studentCount / instructors.filter(instructor => instructor.module === cohort.module).length);
    return obj;
    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher(instructors, cohorts) {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    const obj = {};
    instructors.forEach(instructor => obj[instructor.name] = cohorts.filter(cohort => cohort.curriculum.some(topic => instructor.teaches.includes(topic))).map(cohort => cohort.module));
    return obj;
    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher(instructors, cohorts) {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    const obj = {};
    cohorts.forEach(cohort => cohort.curriculum.forEach(topic => {
      if (!obj[topic]) {
        obj[topic] = [];
      }
    }));
    instructors.forEach(instructor => instructor.teaches.forEach(topic => obj[topic].push(instructor.name)));
    return obj;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty(bosses, sidekicks) {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    let allBosses = sidekicks.map(sidekick => sidekick.boss);
    let uniqueBosses = allBosses.filter((boss, i) => allBosses.indexOf(boss) === i);
    return uniqueBosses.map(boss => ({bossName: boss, sidekickLoyalty: sidekicks.filter(sidekick => sidekick.boss === boss).reduce((sum, sidekick) => sum + sidekick.loyaltyToBoss, 0)}));
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations(constellations, stars) {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]
    const names = Object.values(constellations).map(constellation => constellation.alternateNames);
    const altNames = names.reduce((total, names) => [...total, ...names], []);
    return stars.filter(star => altNames.includes(star.constellation)).sort((a, b) => a.constellation.length - b.constellation.length);
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor(constellations, stars) {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    const obj = {};
    const colors = stars.map(star => star.color)
    colors.filter((color, i) => colors.indexOf(color) === i).forEach(color => obj[color] = []);
    stars.forEach(star => obj[star.color].push(star));
    return obj;
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn(constellations, stars) {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    return stars.sort((a, b) => a.visualMagnitude - b.visualMagnitude).filter(star => star.constellation.length).map(star => star.constellation);
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage(characters, weapons) {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    return characters.reduce((total, character) => [...total, ...character.weapons], []).reduce((sum, weapon) => sum + weapons[weapon].damage, 0);
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal(characters, weapons) {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    return characters.map((character, i) => ({
      [character.name]: ({
        damage: characters.map(character => character.weapons.reduce((sum, weapon) => sum + weapons[weapon].damage, 0))[i],
        range: characters.map(character => character.weapons.reduce((sum, weapon) => sum + weapons[weapon].range, 0))[i]
      })
    }));
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs(dinosaurs, humans, movies) {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    const obj = {};
    movies.forEach(movie => {
      if (!obj[movie.title]) {
        obj[movie.title] = movie.dinos.filter(dino => dinosaurs[dino].isAwesome).length;
      }
    })
    return obj;
    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie(dinosaurs, humans, movies) {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
      const obj = {};
      movies.forEach(movie => {
        if (!obj[movie.director]) {
          obj[movie.director] = ({
            [movie.title]: Math.floor(movie.cast.reduce((sum, human) => sum + movie.yearReleased - humans[human].yearBorn, 0) / movie.cast.length)
          })
        } else {
          obj[movie.director][movie.title] = Math.floor(movie.cast.reduce((sum, human) => sum + movie.yearReleased - humans[human].yearBorn, 0) / movie.cast.length);
        }
      })
      return obj;
    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors(dinosaurs, humans, movies) {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
      const arr = [];
      const cast = movies.reduce((total, movie) => [...total, ...movie.cast], []);
      const uncast = Object.keys(humans).filter(human => !cast.includes(human));
      uncast.forEach(human => arr.push(({
        name: human,
        nationality: humans[human].nationality,
        imdbStarMeterRating: humans[human].imdbStarMeterRating
      })));
      return arr.sort((a, b) => a.nationality < b.nationality ? -1 : a.nationality > b.nationality ? 1 : 0);
      // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies(dinosaurs, humans, movies) {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
   const arr = [];
   const cast = movies.reduce((total, movie) => [...total, ...movie.cast], []);
   const filteredCast = cast.filter((member, i) => cast.indexOf(member) === i);
   filteredCast.forEach((member) => arr.push(({
    name: member,
    ages: []
   })));
   filteredCast.forEach((member, i) => movies.forEach(movie => {
    if (movie.cast.includes(member)) {
      arr[i].ages.push(movie.yearReleased - humans[member].yearBorn);
    }
   }));
   return arr;
   // Annotation:
   // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
