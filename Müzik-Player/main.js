const music_head = document.querySelector("#Music-head");
const img_music = document.querySelector("#img");
const next = document.querySelector("#next");
const resume_stop = document.querySelector("#resume-stop");
const before = document.querySelector("#before");
var TimeStart = document.querySelector("#timestart");
var TimeEnd = document.querySelector("#timeend");


const player = new MusicPlayer(musicList);

window.addEventListener("load", () => { // Burada window sayfa anlamındadır yani aslında burada sayda load olduğu zaman yani yüklendiği zaman buradakileri çalıştır anlamındadır.
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    music_head.innerText = music.getName(); 
    img_music.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

resume_stop.addEventListener("click", () => {
    let play = player.getMusic();
    console.log(play);
})






