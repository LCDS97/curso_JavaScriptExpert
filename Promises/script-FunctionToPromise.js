
// Função de exemplo, callback de sucesso e de falha
/*
const betterPerson = 'Malandro'

function whoIsBetterCallback(callback, errorCallback) {
    if(betterPerson != 'Lucas' && betterPerson != 'Amanda'){
        errorCallback({
            name: 'This is totally wrong,',
            message: betterPerson + '? You joking, right?'
        })
    } else {
        callback({
            name: betterPerson,
            message: 'is really a good person'
        })
        
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + ` Yeah! ` + result.message )
}, (error) => {
    console.log(error.name + ` ` + error.message )
})

*/

// Transformando função em Promise

const betterPerson = 'Amanda'

function whoIsBetterCallback(callback, errorCallback) {

    return new Promise((resolve, reject) => {

    if(betterPerson != 'Lucas' && betterPerson != 'Amanda'){
        reject({
            name: 'This is totally wrong,',
            message: betterPerson + '? You joking, right?'
        })
    } else {
        resolve({
            name: betterPerson,
            message: 'is really a good person'
        })
        
    }
})
}

whoIsBetterCallback()
    .then((result) => {
    console.log(result.name + ` Yeah! ` + result.message )
    }).catch((error) => {
    console.log(error.name + ` ` + error.message )
})

// Para Promises sempre é necessário a resposta e a rejeição
// Sempre para chamar a função utiliza-se o then e o catch
