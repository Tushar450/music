console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItem1s = Array.from(document.getElementsByClassName('songItem1'));

let songs = [
    {songName: "One Kiss - Calvin Harris, Dua Lipa- ", filePath: "music/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Night-Changes", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Right-Now-(Na-Na-Na)---Akon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Lil_Nas_X_-_Thats_What_I_Want", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "MIDDLE-OF-THE-NIGHT", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "No Lie ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Lil Nas X - Industry Baby", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Alan walker - Sorry", filePath: "songs/8.mp3", coverPath: "covers/9.jpg"},
    {songName: "Closer", filePath: "songs/9.mp3", coverPath: "covers/10.jpg"},
    {songName: "Closer", filePath: "songs/9.mp3", coverPath: "covers/10.jpg"},
    {songName: "Sugar Brownies", filePath: "songs/10.mp3", coverPath: "covers/11.jpg"},
    {songName: "Arijit Singh _ Lambiyaan Si Judaiyaan ", filePath: "songs/12.mp3", coverPath: ""},
    {songName: "Chhod Diya (Lyrics) - Arijit Singh", filePath: "songs/13.mp3", coverPath: ""},
    {songName: "Shayad - Love Aaj Kal _ Arijit Singh", filePath: "songs/14.mp3", coverPath: "covers/11.jpg"},
    {songName: "JHMS 2017 - Hawayein (Film Version)", filePath: "songs/15.mp3", coverPath: "covers/10.jpg"},
    {songName: "ADHM - Channa Mereya (Unplugged)", filePath: "songs/16.mp3", coverPath: "covers/11.jpg"},
    {songName: "Space Melody- Alan walker", filePath: "songs/17.mp3", coverPath: "covers/11.jpg"},
    {songName: "Believers- Alan walker", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Paradise- Alan walker", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Alan-Walker---Out-Of-Love", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: " Alan walker - Sorry", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Sia - Unstoppable", filePath: "songs/22.mp3", coverPath: "covers/21.jpg"},
    {songName: " Gabbroo-Jassi - Gill", filePath: "songs/23.mp3", coverPath: "covers/21.jpg"},
    {songName: "Putt Jatt Da", filePath: "songs/23.mp3", coverPath: "covers/24.jpg"},
    {songName: "Raataan Lambiyan - Shershaah", filePath: "songs/25.mp3", coverPath: "covers/21.jpg"},
    {songName: "Mehabooba - KGF Chapter 2", filePath: "songs/26.mp3", coverPath: "covers/21.jpg"},
    {songName: "Justin Bieber - Stay", filePath: "songs/27.mp3", coverPath: "covers/21.jpg"},
    {songName: "Dj Snake - encore -- Let-Me-Love-You", filePath: "songs/28.mp3", coverPath: "covers/21.jpg"},
    {songName: "Lil Nas X - Industry Baby", filePath: "songs/29.mp3", coverPath: "covers/24.jpg"},
    {songName: "Justin Bieber - On My Way", filePath: "songs/30.mp3", coverPath: "covers/21.jpg"},
    {songName: "Closer Song The Chainsmokers ", filePath: "songs/31.mp3", coverPath: "covers/21.jpg"},
    {songName: "Ali Sethi - Pasoori", filePath: "songs/32.mp3", coverPath: "covers/21.jpg"},
    {songName: "Sidhu Moose Wala - 295", filePath: "songs/33.mp3", coverPath: "covers/21.jpg"},
    {songName: "Sidhu Moose Wala - The-Last-Ride", filePath: "songs/34.mp3", coverPath: "covers/24.jpg"},
    {songName: "Harrdy Sandhu - Bijlee Bijlee", filePath: "songs/35.mp3", coverPath: "covers/21.jpg"},
    {songName: "Gurinder Gill - Excuses", filePath: "songs/36.mp3", coverPath: "covers/21.jpg"},
    {songName: "Ranjha (Shershaah)", filePath: "songs/37.mp3", coverPath: "covers/21.jpg"},
    {songName: "Stebin Ben - Baarish Ban Jaana", filePath: "songs/38.mp3", coverPath: "covers/21.jpg"},
    {songName: "Bhool Bhulaiyaa 2 Title Track", filePath: "songs/39.mp3", coverPath: "covers/24.jpg"},
    {songName: "Meri-Jaan", filePath: "songs/40.mp3", coverPath: "covers/21.jpg"},
    {songName: "Zara Sa ", filePath: "songs/41.mp3", coverPath: "covers/21.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})