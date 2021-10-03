function bestRockBand(band){
    return new Promise((resolve, reject) => {
        if(band == 'Queen') {
            resolve ({
                sucess: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            });
        } else {
            reject({
                sucess: false,
                msg: 'I\'m not so sure!'
            });
        }
    });
}

function bestRockSong(response){
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Bohemian Rhaspody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }
    })
}

// Depois de criados as duas Promises agora fazer as chamadas deles usando o then

/*
bestRockBand('Queen')
    .then(response => {
        console.log('Checking the answer...');
        return bestRockSong(response);
    })
    .then(response => {
        console.log('Finding the best song...');
        console.log(response);
    })
    .catch(err => {
        console.log(err.msg);
    })
*/

// Só é utilizado o await com uma função async explicitamente na function

async function doTheJob(){
    // Para trativas de erro de promise, é necessário utilizar um bloco de try e catch
    try {
        const bestRockBandResponse = await bestRockBand('Queen'); // Aqui é chamado a função da Banda

        const bestRockSongResponse = await bestRockSong(bestRockBandResponse); // Aqui a função aguarda a resposta da promise acima para ser executada depois
        console.log(bestRockSongResponse);
    } catch (error) {
        console.log(error.msg);
    }
    // Nesse caso não é necessário o bloco de then e catch

}

doTheJob()