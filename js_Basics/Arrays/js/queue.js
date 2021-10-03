// ANCHOR Queue

// SECTION Class 18 - Queue - FIFO (First in First Out)

function Queue() {
    var items = [];

    this.enqueue = function(element) { // NOTE Add an item to the queue
        // Add an item
        items.push(element)
    }

    this.dequeue = function() { // NOTE Remove an item from the queue in the first element in the queue
        // Remove an item
        return items.shift()
    }

    this.front = function() { // NOTE Always removing an item from the queue, will return to an index 0 in the queue
        // Return the first item element in the queue
        return items[0]
    }

    this.isEmpty = function() {
        // Verify the queue is empty
        if (items.length === 0){ return console.log("Queue is empty")} else { return console.log("Queue is not empty")}
    }

    this.size = function() { // NOTE Return the size of the queue
        // Return the size of the queue
        return items.length
    }

    this.print = function() {
        // Print the queue in console
        return console.log(items.toString())
    }
}

// !SECTION

// SECTION Testing the queue

bank = new Queue()

// NOTE Adding persons in the queue
bank.enqueue('Felipe')
bank.print()
bank.enqueue('Maria')
bank.print()
bank.enqueue('Augusto')
bank.print()
bank.isEmpty()

// NOTE Removing a person from the queue
bank.dequeue()
// NOTE Showing who is the next person in the queue
console.log('The next people in the queue is: '  + bank.front())
bank.print()
// NOTE Verify if the queue is empty
bank.isEmpty()

bank.dequeue()
console.log('The next people in the queue is: '  + bank.front())
bank.print()
bank.isEmpty()

bank.dequeue()
// NOTE Showing now that the queue is empty
bank.isEmpty()



