// ANCHOR Loops

// SECTION Every

// NOTE Every has a unique feature, the callback function need to return in boolean if in some moment return false i will return the value of him as false, otherwise, all values need to be true

const yearsOldFamily = [{
    name: 'Lucas',
    age: 23
},
{
    name: 'Amanda',
    age: 24
},
{
    name: 'Fabio',
    age: 25
},
{
    name: 'Leonardo',
    age: 23
},
{
    name: 'Sergio',
    age: 53
},
{
    name: 'Luiza',
    age: 52
}

]
// NOTE Example of a false return
const ages = value => value.age >= 30
const moreThirty = yearsOldFamily.every(ages)
console.log (`The result of more Thirty is: ${moreThirty}`)

// NOTE Example of a true return

const adult = value => value.age > 18
const onlyAdult = yearsOldFamily.every(adult)
console.log(`The result of only Adult is: ${onlyAdult}`)