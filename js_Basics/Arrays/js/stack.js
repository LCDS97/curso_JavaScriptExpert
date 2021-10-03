// ANCHOR Stacks

// SECTION - Class 11 - Stacks


// NOTE Stacks is object-oriented and introduce the concept of LIFO (Last In First Out)

// SECTION - Class 12 - Stacks methods
function Stack() {
    var items = []

    this.push = function(element) {
        // Add an item in the stack
        items.push(element)

    }
    
    this.pop = function() {
        // Removing an item in top of the stack
        return items.pop()
    }
// NOTE In Stacks, the concept is if an item is added to the stack, he will be the first item to get out, in brief, the last item is the first item to get out

    this.peek = function() {
        // Retrieve an item that was previously in the top of stack

        return items[items.length - 1]
    }

    this.isEmpty = function() {
        //  Will inform if the stack is empty or not
        if (items != 0) {
            return console.log('Items in the stack is: ' + items.length)
        } else {
            return console.log('Stack is empty!') 
            
        }

    }

    this.clear = function() {
        // Clear all the stack items
        items = []
    }

    this.size = function() {
        // Will inform the lenght of the stack
        return items.length
    }

    this.print = function() {
        // Print the stack in the console
        console.log(items.toString())
    }
}
// !SECTION - 

// SECTION Class 13 - Testing the stack
var books = new Stack()

// NOTE Adding items to final of the stack with the method push
books.push('Horror')
books.push('Comedy')
books.push('Romance')
books.push('Documentary')
books.push('Fiction')

// NOTE Showing the new books added and cleared all items of the stack
books.print()
books.clear()
books.print()

// !SECTION -
console.log('============ Analyzing the stack ============')
// SECTION - Class 14 - Analyzing the stack in the console
var booksStack = new Stack()

booksStack.isEmpty()
booksStack.push('Self-help')
booksStack.print()
booksStack.push('Technology')
booksStack.print()
booksStack.push('Religious')
booksStack.print()

booksStack.pop()
booksStack.print()
booksStack.pop()
booksStack.print()
booksStack.pop()
booksStack.isEmpty()

// !SECTION -
console.log('========= Decimal to binary =========')
// SECTION Class 15 - Decimal to binary

// NOTE Creating three variables to atribute a decimal number and convert to binary
function decimalTobinary(decNumber){
    var restStack = [],
    rest,
    binaryString= ''

    while(decNumber > 0) { // NOTE Analyse if the number is greater than zero
        rest = Math.floor(decNumber % 2) // NOTE The rest of the number
        restStack.push(rest) // NOTE Get a push to final item [1,1,1,0,1]
        decNumber = Math.floor(decNumber / 2)// Division of the number that is allocated in the rest variable, the last number cannot be divisible by 2, so automatically the result is 1 because of the push, and after that analyzing the decNumber is not greater than zero
    }

    while(restStack.length > 0) { // NOTE restStack is the length of 5 elements ([1,1,1,0,1]) and attribute this to the pop condition
        binaryString += restStack.pop().toString()
    } // NOTE The loop add the last number of the restStack to string, so the result is 1,0,1,1,1

    return binaryString
}

console.log(decimalTobinary(23))

// !SECTION - 

// SECTION Class 17 - Base Converter 

function baseConverter(decimalNumber, base) {
    var stackRest = [],
    restNumber,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decimalNumber > 0) { // NOTE Verify if the decimal number is greater than zero
        restNumber = Math.floor(decimalNumber % base) // NOTE The rest number of decimal number divided by the base number
        stackRest.push(restNumber)// NOTE Get a push of restNumber in StackRest[11,7]
        decimalNumber = Math.floor(decimalNumber / base) // NOTE Until get the decimal number condition that is greater than zero
    }

    while(stackRest.length > 0) { 
        baseString += digits[stackRest.pop()]
    }

    return baseString
}

console.log(baseConverter(123,2))

// !SECTION -





