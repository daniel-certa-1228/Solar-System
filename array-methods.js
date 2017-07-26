console.log( "array-methods.js" );

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/////////////////////////////////////////////////////////////
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
let planetDiv = document.getElementById("planets");

planets.forEach( (planet) => {
	planetDiv.innerHTML += `<p>${planet}</p>`;
});
//////////////////////////////////////////////////////////////
// Use the map method to create a new array where the first letter of each planet is capitalized
let planetCaps = planets.map(capFirstLetter);
let planetCapDiv = document.getElementById("planets-cap")
function capFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

planetCaps.forEach( (planet) => {
	planetCapDiv.innerHTML += `<p>${planet}</p>`;
});
//////////////////////////////////////////////////////////////
// Use the filter method to create a new array that contains planets with the letter 'e'
let planetE = planets.filter(filterForE).map(capFirstLetter);
let planetEDiv = document.getElementById("planets-E");

function filterForE(string){
	return /e/.test(string);
};

planetE.forEach( (planet) => {
	planetEDiv.innerHTML += `<p>${planet}</p>`;
});
//////////////////////////////////////////////////////////////
// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce(sentenceBuild) + ".";
let sentenceDiv = document.getElementById("sentence-Div");

sentenceDiv.innerHTML += `<p>${sentence}</p>`

function sentenceBuild(a, b) {
	return a + " " + b;
};
//////////////////////////////////////////////////////////////




















