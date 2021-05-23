// ANCHOR Study code of the extension to see if have children notes

// SECTION Working with arrays

// SECTION Class 3 - Introduction to array
// NOTE Starting an array, and inserting value below and inside this array
var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 26.5

// NOTE Accessing an array named temp with the index number
//console.log(avgTemp[2])

// !SECTION - 
// SECTION Class 4 - Creation and Initialization with arrays
// NOTE Starting an array like a object instance, this is not a good practice to use in projects
var daysOfWeek = new Array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// console.log(daysOfWeek.length)

// !SECTION -
// SECTION Class 5 - Acessing Arrays through interation

var monthsOfYear = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

for(var i = 0; i < monthsOfYear.length; i++) {
    console.log(monthsOfYear[i])
}

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

// NOTE Loop over the Fibonacci numbers, so the next number is the result of the previous two numbers
for(var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

//console.log(fibonacci)


for(var i = 0; i < fibonacci.length; i++) {
    //console.log(fibonacci[i])
}
// !SECTION

// SECTION Class 6 - Inserting elements in the array

var numbers = [0,1,2,3,4,5,6,7,8,9]

// NOTE Two ways do this
numbers[10] = 10
// or
numbers[numbers.length] = 11

// NOTE But this is not a good practice, to get the best result, we will use .push
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)

// NOTE If you want to put the elements before you can use .unshift

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)



// !SECTION -

// SECTION Class 7 -Removing elements of the array

// NOTE Removing the last index of the array with .pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

// NOTE Removing the first index of the array with .shift()
numbers.shift()
numbers.shift()
numbers.shift()
numbers.shift()

console.log(numbers)
console.log('after splice')



// !SECTION -

// SECTION Class 8 - Inserting a index in an specific position

// NOTE To remove elements, the first parameter is where the deletion will occur by selecting the number of is index, after the comma will specify how many index will be deleted
numbers.splice(3, 3)
console.log(numbers)

// NOTE To insert elements, the first parameter is where the insertion will occur, specify with '0' that will not remove any index, after the comma, you specify the items you want to insert
console.log('inserting items with splice')
numbers.splice(3, 0, 'ok','another','text')
//console.log(numbers)

// !SECTION

// SECTION Class 9 - Bidimensional Arrays


var avgTempWeek = []

var avgTempWeek1 = [31,25.2,19,27,10.5,12,16]
var avgTempWeek2 = [36,25.2,19,17,14.5,13,15.9]


avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

//Arrays bidiomensinals funcionam da seguinte forma, você acessa o indice dentro desse conjunto de array(avgTempWeek), e para selecionar um item especifico, você define pela posição do número de indice onde se encontra o index

// NOTE Bidimensional arrays work with the specific number inside of the array collection (avgTempWeek), and to select the children content can be accessed by the index number inside of the father array
console.log(avgTempWeek[0][4])

// SECTION Class 10 - Tridimensional arrays

// NOTE You can make nested arrays to work with trdimensional arrays

var year = []

var Summer = []
var Winter = []

var avgTempJanMonth = [15,30,35,29]
var avgTempFevMonth = [24,25.6,31,22.6]

var avgTempJulMonth = [32,34.5,36,33.1]
var avgTempAugMonth = [39,37.5,40.1,39]

Summer = [avgTempJanMonth, avgTempFevMonth]
Winter = [avgTempJulMonth, avgTempAugMonth]

year = [Summer, Winter]

// NOTE Acessing the four item of avgTempJanMonth (29)
console.log('The avgTemp is: ' + year[0][0][3])

console.log('Making forEach of months')

// NOTE Scrolling through the items of y (the average summer and winter temperature) that is inside x (summer and winter)
for (var x = 0; x < year.length; x++) {
    for (var y = 0; y < year[x].length; y++){
        for(var z = 0; z < year[x][y].length; z++) {
            console.log(year[x][y][z])
        }
    }
}









