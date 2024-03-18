const playButton = document.querySelector(".play");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const repeatButton = document.querySelector(".repeat");
const loopButton = document.querySelector(".loop");
const title = document.querySelector(".card__title");
const range = document.querySelector(".card__timeline input");
const timePassed = document.querySelector(".card__time-passed");
const timeLeft = document.querySelector(".card__time-left");
const masterPlayPauseButtons = document.querySelector(".masterplay");
const songGif = document.querySelector(".songgif");
const songsContainer = document.querySelector(".songsContainer");
const menuButton = document.querySelector(".card__btn-menu");
const musicCard = document.querySelector(".card");

let currentPlayingSong = 0;
let currentDuration = 0;

const audio = new Audio();

const songs = [
    {
        name:"NO EXCUSES",
        path:'songs/motivation/NO EXCUSES.mp3' ,
        category:'Motivation',
        language: 'English',
    },
    {
        name: "Mana ki mushkil hai",
        path: "songs/motivation/Mana ki mushkil hai.mp3",
        category: "Motivation",
        language: "Hindi",
    },
    {
        name: "Lakhya",
        path:'songs/motivation/Lakshya.mp3',
        category: "Motivation",
        language: "Hindi",
    },
    {
        name:"Zinda",
        path:'songs/motivation/zinda.mp3',
        category: "Motivation",
        language: "Hindi",
    },
    {
        name:"Imagine Dragons - Believer",
        path:'songs/motivation/Imagine Dragons - Believer.mp3',
        category: "Motivation",
        language: "English",
    },{
        name:"Sia - Unstoppable",
        path:'songs/motivation/Sia - Unstoppable.mp3',
        category: "Motivation",
        language: "English",
    },
   
]

function updateSongList(){
    songs.forEach((song, index) => {
        let li = document.createElement('li');
        li.classList.add('song');

        li.innerHTML = `<span>${song.name}</span>
        <span> <svg class="play" height="22" viewBox="0 0 18 22" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v22l18-11z" ></path></svg>
               <svg class="pause" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg>
        </span>
        `

        li.querySelector('.play').addEventListener('click', () => {
            songsContainer.querySelectorAll('li').forEach((li, idx) => {
                if(idx !== index) {
                    li.querySelector('.play').style.display = "inline";
                    li.querySelector('.pause').style.display = "none";
                }else{
                    li.querySelector('.play').style.display = "none";
                    li.querySelector('.pause').style.display = "inline";
                }
            })


            if(currentDuration < audio.duration && currentPlayingSong === index) {
                audio.play();
                masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "none";
                masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "inline";
                songsContainer.querySelectorAll('li').forEach((li, idx) => {
                    if(idx !== currentPlayingSong) {
                        li.querySelector('.play').style.display = "inline";
                        li.querySelector('.pause').style.display = "none";
                    }else{
                        li.querySelector('.play').style.display = "none";
                        li.querySelector('.pause').style.display = "inline";
                    }
                })
            }else{
                currentPlayingSong = index;
                playsong();
            }

            masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "none";
            masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "inline";
        })
        li.querySelector('.pause').addEventListener('click', () => {
            audio.pause();
            masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "none";
            masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "inline";
            li.querySelector('.pause').style.display = "none";
            li.querySelector('.play').style.display = "inline";
        })
        li.setAttribute('data-index', index);
        songsContainer.appendChild(li);
    })
    
}

updateSongList();
function playsong(){
    let song = songs[currentPlayingSong];
    title.innerText = song.name;
    audio.src = song.path;
    audio.play();
    masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "none";
    masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "inline";

    songsContainer.querySelectorAll('li').forEach((li, idx) => {
        if(idx !== currentPlayingSong) {
            li.querySelector('.play').style.display = "inline";
            li.querySelector('.pause').style.display = "none";
        }else{
            li.querySelector('.play').style.display = "none";
            li.querySelector('.pause').style.display = "inline";
        }
    })
}

playButton.addEventListener("click", () => {
    // play the same song if currentDuration is not full Duration of song.
    if (audio.paused) {
        if(currentDuration < audio.duration) {
            audio.play();
            masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "none";
            masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "inline";
            songsContainer.querySelectorAll('li').forEach((li, idx) => {
                if(idx !== currentPlayingSong) {
                    li.querySelector('.play').style.display = "inline";
                    li.querySelector('.pause').style.display = "none";
                }else{
                    li.querySelector('.play').style.display = "none";
                    li.querySelector('.pause').style.display = "inline";
                }
            })
        }else{
            playsong();
        }
    } else {
        audio.pause();
        masterPlayPauseButtons.querySelector('svg:nth-child(2)').style.display = "none";
        masterPlayPauseButtons.querySelector('svg:nth-child(1)').style.display = "inline";

        songsContainer.querySelectorAll('li').forEach((li, idx) => {
            li.querySelector('.play').style.display = "inline";
            li.querySelector('.pause').style.display = "none";
        })

    }
})

audio.addEventListener('timeupdate', () => {
    let percentage = Math.floor((audio.currentTime / audio.duration) * 100);
    console.log(percentage)
    range.value = percentage;

    let minutesPassed = Math.floor(audio.currentTime / 60);
    let secondsPassed = Math.floor(audio.currentTime - minutesPassed * 60);

    let minutesTotal = Math.floor(audio.duration / 60);
    let secondsTotal = Math.floor(audio.duration - minutesTotal * 60);

    timePassed.innerText = `${minutesPassed}:${secondsPassed < 10 ? '0' + secondsPassed : secondsPassed}`;
    timeLeft.innerText = `${minutesTotal}:${secondsTotal < 10 ? '0' + secondsTotal : secondsTotal}`;
})

audio.addEventListener('ended', () => {
    nextSong();
})
range.addEventListener('input', () => {
    audio.currentTime = (range.value * audio.duration) / 100;
})

function nextSong () {
    currentPlayingSong++;
    if (currentPlayingSong > songs.length - 1) {
        currentPlayingSong = 0;
    }
    playsong();
}

nextButton.addEventListener("click", nextSong)

function prevSong () {
    currentPlayingSong--;
    if (currentPlayingSong < 0) {
        currentPlayingSong = songs.length - 1;
    }
    playsong();
}

prevButton.addEventListener("click", prevSong)

function loopsong () {
    if (audio.loop) {
        audio.loop = false;
        loopButton.style.background = "";
    } else {
        audio.loop = true;
        loopButton.style.background = "red";
    }
}

loopButton.addEventListener("click", loopsong)

let isPlayerHided = false;
menuButton.addEventListener("click", () => {
    if (isPlayerHided) {
        musicCard.style.height = "auto";
        songsContainer.style.height = '40%';
        isPlayerHided = false;
    }else{
        musicCard.style.height = "50px";
        songsContainer.style.height = '60%';
        isPlayerHided = true;
    }
})