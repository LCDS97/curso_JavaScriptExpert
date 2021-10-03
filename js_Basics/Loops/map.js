// ANCHOR Loops

// SECTION Map

// NOTE In map looping, he will loop the entire array in a new array

const temperatureCelsius = [0,22,16,31,35,41,25]
const toFahrenheit = value => ((value * 9) / 5) + 32
const temparatureFahrenheit = temperatureCelsius.map(toFahrenheit)

console.log(temperatureCelsius)
console.log(temparatureFahrenheit)