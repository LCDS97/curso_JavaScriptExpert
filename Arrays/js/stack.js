// ANCHOR Stacks

// SECTION - Class 11 - Stacks


// NOTE Stacks is object-oriented and introduce the concept of LIFO (Last In First Out)
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
        return items.length === 0
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