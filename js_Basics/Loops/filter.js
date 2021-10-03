// ANCHOR Loops

// SECTION Filter - Example one

// NOTE In filter loop, he will filter the elements that match the condition that is passed to him

const numbers = [0,12,44,56,77,124,11,98,97,34,887,3421,89]

const even = n => n % 2 === 0
const odd = n => n % 2 > 0
const evenNumbers = numbers.filter(even)
const oddNumbers = numbers.filter(odd)

console.log(`The numbers that are even: ${evenNumbers}`)
console.log(`The numbers that are odd: ${oddNumbers}`)

// SECTION Filter - Example 2

const videoResolutions = [
    ['QVSA', '320x420', '4:3'],
    ['VGA', '640x480', '4:3'],
    ['VGA', '720x480', '4:3'],
    ['SVGA', '800x600', '4:3'],
    ['XGA', '1024x768', '16:9'],
    ['WXGA', 'HD¹/720p', '1280x720', '16:9'],
    ['WXGA¹', '1366x768', '16:9'],
    ['WXGA', '1400x900', '16:10(8:5)'],
    ['UXGA¹', '1600x768', '16:9'],
    ['UXGA++', '1680x1050', '16:10(8:5)'],
    ['Full HD / 1080p', '1920x1080', '16:9'],
    ['Full HD Ultra Wide[1]', '2560x1080', '21:9'],
    ['WQHD', '2560x1440', '16:9'],
    ['4K Ultra HD / 2160p', '3840x2160', '16:9'],
    ['8K Ultra HD / 4320p', '7680x4320', '16:9'],
    ['10k UHDTV', '10240x4320', '21:9'],
    ['10K UHDTV', '10328x7760', '4:3'],
]

// NOTE Only will return the elements that have 16:9 in the properties, the difference between filter and map, it's because map will return the values from the condition, but he will preserve the size of the original array, filter will reduce the size that match with the result of the filter
const resolutions16_9 = videoResolutions.filter((value) => {
    if (value[2] == '16:9') return value
})

console.log(resolutions16_9)

// !SECTION