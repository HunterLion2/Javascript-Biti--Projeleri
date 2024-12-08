class MusicApp {
    constructor (name, img, file) {
        this.name = name;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.name;
    }
}
    

const musicList = [
    new MusicApp("Vinee", "Vine.jpg", "Vinee.mp3"),
    new MusicApp("Amalgam", "amalgam.webp", "amalgam-217007.mp3"),
    new MusicApp("Beyond-Horizon", "beyond.png", "beyond.mp3")
]