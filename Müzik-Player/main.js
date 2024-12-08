const music_head = document.querySelector("#Music-head");
const img_music = document.querySelector("#img");
const next = document.querySelector("#next");
const resume_stop = document.querySelector("#resume-stop");
const before = document.querySelector("#before");

const player = new MusicPlayer(musicList);

function musicHead() {
    music_head.innerHTML = player.musicList[0];
}

musicHead();

next.addEventListener("click", () => {
    
});

