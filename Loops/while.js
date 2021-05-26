// ANCHOR Loops

// SECTION While is not common practice to interate with arrays

const amandaBag = [
    'credit card',
    'alcohol in gel',
    'money',
    'perfume',
    'ticket pass',
]
// NOTE This is not a good way to control the array because you need to control the index inside the amandaBag, with index increment, or will cause infinite loop
let index = 0
while (index < amandaBag.length) {
    console.log(`${index + 1}. ${amandaBag[index]}`)
    index++  
} 

// !SECTION