


document.getElementById("search-btn").addEventListener("click",()=>{
    const songName = document.getElementById("input-song").value;
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(res => {
        

       

        for(let i=0;i<10;i++){
            const songData=res.data[i];
            const songName= songData.title;
            const artistName = songData.artist.name;
            document.getElementById("search-result").innerHTML += `
            <div  class="single-result row align-items-center mx-3 my-3 p-3">
            <div class="col-md-9 mt-3" id="song-list">
            <h3 id="lyrics-name" class="lyrics-name">${songName}</h3>
            <p class="author lead">Album by <span id="artist-name">${artistName}</span></p>
            </div>
            <div id="get-lyrics-btn" class="col-md-3 text-md-right text-center mt-3">
            <button onclick="getLyrics('${songName}','${artistName}')" class="btn btn-success">Get Lyrics</button>
             </div>
            </div>
            `;
           
        }

     
      
    });
    

})
const getLyrics = (title,artist)=>{
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
})
}
