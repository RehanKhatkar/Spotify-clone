async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}
async function main() {
  let songs = await getSongs();
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Minor</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                    height="24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="#1ED760" />
                                    <path d="M9.5 8V16L16 12L9.5 8Z" fill="black" />
                                </svg>
                            </div>
         </li>`;
  }
  //play the song
  var audio = new Audio(songs[0]);
  //audio.play();
}
main();
