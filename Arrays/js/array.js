// ANCHOR Study code of the extension to see if have children notes

// SECTION Trabalhando com arrays / Working with arrays
// NOTE Verificar depois sobre estudar e praticar sobre o JS com ES6 / Check later about to study e practice JS with ES6

// NOTE Inicializando um array e irei inserir valores abaixos dentro desse array / Starting an array, and inserting value below and inside this array
var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 26.5

// NOTE Acessando o array do temp pelo número de indice / Accessing an array named temp with the index number
//console.log(avgTemp[2])

// NOTE Inicializando o array como instancia de um tipo de objeto, não é a melhor prática utilizr assim / Starting an array like a object instance, this is not a good practice to use in projects
var daysOfWeek = new Array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// console.log(daysOfWeek.length)

// NOTE Class - 5 Acessing Arrays through interation

var monthsOfYear = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

for(var i = 0; i < monthsOfYear.length; i++) {
    console.log(monthsOfYear[i])
}

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

//console.log(fibonacci)

for(var i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}


