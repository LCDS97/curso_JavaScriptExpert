function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics-form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

// async
async function doSubmit(){
    const lyrics_el = document.querySelector("#lyrics")
    const artist = document.querySelector("#artist")
    const song = document.querySelector("#song");

    lyrics_el.innerHTML = '<div class="spinner-grow" role="status" style="width: 3rem; height: 3rem;"><span class="sr-only">Carregando...</span></div>';

// await
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        lyrics_el.innerHTML = data.lyrics;
    } catch (error) {
        lyrics_el.innerHTML = '<div><p>Verifique o nome do artista e a sua música e tente novamente!</p></div>'
        console.log(error);
    }


}

/* Antigamente era feito por then e catch com async e await fica da seguinte forma acima
    findLyrics(artist.value, song.value)
        .then(response => response.json())
        .then(data => {
            if(data.lyrics){
                lyrics_el.innerHTML = data.lyrics;
            } else {
                lyrics_el.innerHTML = data.error;
            }
        })
        .catch(err =>{
            lyrics_el.innerHTML = `Oops! ${err}`;
        })

    
*/

