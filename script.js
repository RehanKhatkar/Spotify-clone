async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/Spotify/songs/")
    let response= await a.text()
    let div =document.createElement("div")
    div.innerHTML=response
    let as=div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs
}
async function main() {
    let songs=await getSongs()
    let songUL=document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML= songUL.innerHTML+`<li> ${song.replaceAll("%20"," ")} </li>`;
    }
    //play the song
    var audio=new Audio(songs[0]);
    //audio.play();
}
main()