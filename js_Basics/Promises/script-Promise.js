// Exemplo básica da estrutura de um promise

let p = new Promise( (resolve, reject) => {
    let a = 1 + 1
    if ( a == 2 ){
        resolve('Sucess')
    } else {
        reject('Fail')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((err) => {
    console.log('This is the catch ' + err)
})