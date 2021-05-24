// ANCHOR Queue

// SECTION Class 18 - Queue - FIFO (First in First Out)

function Queue() {
    var items = [];

    this.enqueue = function() { // NOTE Add an item to the queue
        // Add an item
        item.push(element)
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
        return items.length === 0
    }

    this.size = function() { // NOTE Return the size of the queue
        // Return the size of the queue
        console.log(items.toString())
    }

    this.print = function() {
        // Print the queue in console
    }
}