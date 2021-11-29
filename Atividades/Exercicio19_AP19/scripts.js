function bestPopBand(band){
    return new Promise((resolve, reject) =>{
        if(band == 'RBD') {
            resolve(
                {
                    success: true,
                    bandName: band,
                    msg: band + 'is the best rock band ever!'
                });
        } else {
            reject(
                {
                    success: false,
                    msg: 'I\'m not so sure!'
                });
        }
    });
}

function bestPopSong(response){
    return new Promise((resolve, reject) =>{
        if(response.success){
            resolve('Me voy by' + response.bandName);
        } else {
            reject('Do you know RBD?');
        }
    });
}
/*
bestPopBand('RBD')
    .then(response => {
        console.log('Checking the answer...');
        return bestPopSong(response)
    })
    .then(response => {
        console.log('Finding the best song...');
        return bestPopSong(response)
    })
    .catch(err => {
        console.log(err.msg);
    })
*/

async function doTheJob() {
    try{
    const bestPopBandResponse = await bestPopBand('RBD');
    console.log(bestPopBandResponse)
    const bestPopSongResponse = await bestPopBand(bestPopBandResponse);
    console.log(bestPopSongResponse)
} catch(err) {
    console.log(err.msg); }
}
doTheJob();
