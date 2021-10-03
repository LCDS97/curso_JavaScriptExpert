// ANCHOR Loops

// SECTION For Each

const amandaBag = [
    'credit card',
    'alcohol in gel',
    'money',
    'perfume',
    'ticket pass',
]

amandaBag.forEach((value,index) => { // NOTE You dont have a break like for module, automatically forEach method read the entire context, and dont have a callback function
    console.log(`${index}. ${value}`)
})

// NOTE It's not recommended to use this in big arrays

// !SECTION -