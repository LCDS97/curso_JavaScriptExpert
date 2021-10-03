// ANCHOR Loops

// SECTION Loop  For In
const family = [{
        name: 'Lucas',
        job: 'Node Programmer'
    },
    {
        name: 'Amanda',
        job: 'Human Resources'
    },
    {
        name: 'Leonardo',
        job: 'React Programmer'
    },
    {
        name: 'Fabio',
        job: 'Plane pilot'
    }
]
// NOTE Declare the item that it's inside of the collection family
for (let person in family){
    console.log(family[person])
}