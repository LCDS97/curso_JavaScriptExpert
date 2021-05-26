// ANCHOR Loops

// SECTION Reduce

// NOTE The difference of the reduce compared to filter and map is that the result of reduce will create a new value, and not a new array

const videos = [{
    id: 'pwqjp209',
    title: 'Javascripto',
    views: 4503
},
{
    id: 'kdjfuh12',
    title: 'Protect your credentials now!!',
    views: 12004 
},
{
    id: '342klkl909vv',
    title: 'Thanks for technology',
    views: 124000094
},

]

const totalViews = videos.reduce((sum, video) => {
    return sum + video.views
}, 0);

console.log(totalViews)

// NOTE Reduce is perfect to calculate values from arrays

// !SECTION