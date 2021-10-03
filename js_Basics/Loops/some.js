// ANCHOR Loops

// SECTION Some

// NOTE The difference of this some loop, it's that he will return a true value if any element has is a condition that is true

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

const noChild = value => value.age > 18
const haveAdults = yearsOldFamily.some(noChild)

console.log(`It's ${haveAdults} that have adults there`)

