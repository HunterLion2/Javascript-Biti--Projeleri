const music_head = document.querySelector("#Music-head");
const img_music = document.querySelector("#img");
const next = document.querySelector("#next");
const resume_stop = document.querySelector("#resume-stop");
const before = document.querySelector("#before");
const audio = document.querySelector("#audio");
const beforeicon = document.querySelector("#before-icon");
const nexticon = document.querySelector("#next-icon");
const resumeicon = document.querySelector("#resume-icon");
const progressBar = document.querySelector("#progress");
var TimeStart = document.querySelector("#timestart");
var TimeEnd = document.querySelector("#timeend");

const player = new MusicPlayer(musicList);


window.addEventListener("load", () => { // Burada window sayfa anlamındadır yani aslında burada sayda load olduğu zaman yani yüklendiği zaman buradakileri çalıştır anlamındadır.
    let music = player.getMusic();
    displayMusic(music);

    audio.addEventListener("loadedmetadata", () => {
        const duration = audio.duration;
        TimeEnd.innerText = formatTime(duration);
    });
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    TimeStart.innerText = formatTime(currentTime);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Burada % işareti seconds'ı 60'a böldüğümüz zamanki kalan değeri getirir.
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function displayMusic(music) {
    music_head.innerText = music.getName(); 
    img_music.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

// Müziği başlatma durdurma butonu

let isPlaying = false;

resume_stop.addEventListener("click", () => {
    if(isPlaying) {
        resumeicon.classList = "fa-solid fa-play";
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
        resumeicon.classList = "fa-solid fa-pause";
        ProgressBar();
    }
    
})

// Müzik değiştirme metodları

before.addEventListener("click", () => {
    let music = player.getMusic();
    displayMusic(music);
    player.previous();
});

next.addEventListener("click", () => {
    let music = player.getMusic();
    displayMusic(music);
    player.onNext();
});

// Ses kontrol çubuğu'nun İlerlemesi

function ProgressBar() {
    setInterval(function() {


        let explain = // audio.currentTime / Toplam Dakika

        progressBar.style.width = explain + "%";
    }, 1000)
}


