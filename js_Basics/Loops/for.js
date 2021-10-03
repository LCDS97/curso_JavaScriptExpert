// ANCHOR Loops

// SECTION Loop condition with for
const amandaBag = [
    'credit card',
    'alcohol in gel',
    'money',
    'perfume',
    'ticket pass',
]

for (let index = 0; index < amandaBag.length; index++) {
    console.log(`${index+1}. ${amandaBag[index]}`) // NOTE You can break the loop with break after you search the item you want
    // if (amandaBag[index] == 'money') break
}

// !SECTION -