function getMusic(){

    const artist = document.querySelector("#artist").value;
    const song = document.querySelector("#song").value;
    
    const url = 'https://api.lyrics.ovh/v1/${artist}/${song}'

    axios.get(url)
    
    .then(response => {
        renderResults.innerHTML = response.data.lyrics.replace(new RegExp('\n\n', 'g'), '<br>')
    })
    .catch(err => console.log(err))
}