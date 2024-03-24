const musicHtml = `
<div class="music-card">
<button class="card__btn card__btn-menu">
    <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v3h-12-12zm0 7.5h24v3h-24zm0 7.5h24v3h-24z" fill="#fff"></path></svg>
</button>
<div class="card__img">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle r="60" fill="#ffd8c9" cy="64" cx="64"></circle><circle r="48" opacity=".3" fill="#fff" cy="64" cx="64"></circle><path fill="#393c54" d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z"></path><circle r="7" fill="#fbc0aa" cy="60" cx="89"></circle><path fill="#00adfe" d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z"></path><path fill="#ff8475" d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"></path><path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z"></path><path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z"></path><path stroke-width="14" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa" fill="none" d="m64 83v12"></path><circle r="7" fill="#fbc0aa" cy="60" cx="39"></circle><path fill="#ffd8c9" d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path><path stroke-width="5" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa" fill="none" d="m64 64.75v6.5"></path><path fill="#515570" d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z"></path><path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z"></path><path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z"></path><path opacity=".7" fill="#ff8475" d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"></path><path opacity=".7" fill="#f85565" d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"></path><circle r="3" fill="#515570" cy="58.75" cx="76.25"></circle><path stroke-linejoin="round" stroke-linecap="round" stroke="#515570" fill="none" d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"></path><path style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:#515570;stroke-width:2;opacity:.2" d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"></path><circle r="3" fill="#515570" cy="58.75" cx="51.75"></circle><g stroke-linecap="round" fill="none"><path stroke-linejoin="round" stroke="#515570" d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31"></path><path stroke-width="2" stroke-linejoin="round" stroke="#515570" opacity=".2" d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"></path><path stroke-miterlimit="10" stroke="#f85565" d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"></path></g></svg> -->
    <img class="songgif" src="assets/images/musicplayer.webp" alt="" style="width: 100%;">
</div>
<div class="card__title">Play Songs</div>
<!-- <div class="card__subtitle">Smalltown Boy , Shane D</div> -->
<div class="card__wrapper">
    <div class="card__time card__time-passed">00:00</div>
    <div class="card__timeline"><input type="range" value="0" min="0" max="100"></input></div>
    <div class="card__time card__time-left">00:00</div>
</div>
<div class="card__wrapper">
    <!-- <button class="card__btn repeat"><svg fill="none" height="12" viewBox="0 0 20 12" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v12h-20z"></path></clipPath><g><path d="m17 1c0-.265216-.1054-.51957-.2929-.707107-.1875-.187536-.4419-.292893-.7071-.292893h-8v2h7v5h-3l3.969 5 4.031-5h-3zm-14 10c0 .2652.10536.5196.29289.7071.18754.1875.44189.2929.70711.2929h8v-2h-7v-5h3l-4-5-4 5h3z" fill="#fff"></path></g></svg></button> -->
    <button class="card__btn prev"><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z" fill="#fff"></path></svg></button>
    <button class="card__btn card__btn-play play masterplay">
        <svg fill="none" height="22" viewBox="0 0 18 22" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v22l18-11z" fill="#000"></path></svg>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg>
    </button>
    <button class="card__btn next"><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z" fill="#fff"></path></svg></button>
    <button class="card__btn loop"><svg width="23px" height="23px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g fill="gray">
            <path d="M11 0v2h1.006c1.258.015 2.179-.03 2.932.385.376.207.673.56.837.998.165.438.225.96.225 1.617v6c0 .658-.06 1.179-.225 1.617a1.88 1.88 0 0 1-.838.998c-.752.416-1.673.37-2.931.385H3.994c-1.258-.015-2.179.03-2.932-.385a1.88 1.88 0 0 1-.838-.998C.06 12.18 0 11.657 0 11V5c0-.658.06-1.179.225-1.617a1.88 1.88 0 0 1 .838-.998c.752-.416 1.673-.37 2.931-.385H5v1H4c-1.259.015-2.087.06-2.453.262-.184.1-.29.212-.387.472C1.063 3.994 1 4.408 1 5v6c0 .592.063 1.006.16 1.266.098.26.203.371.387.472.366.202 1.194.247 2.453.262h8c1.259-.015 2.09-.06 2.455-.262.184-.1.287-.212.385-.472.097-.26.16-.674.16-1.266V5c0-.592-.063-1.006-.16-1.266-.098-.26-.202-.371-.385-.472C14.09 3.06 13.26 3.015 12 3h-1.002v2a36.954 36.954 0 0 1-2.322-1.166c-.781-.43-1.533-.876-2.258-1.334.725-.45 1.477-.89 2.258-1.32C9.464.75 10.239.357 11 0z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#000000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
            <path d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z" style="line-height:1000%;-inkscape-font-specification:Ubuntu;text-align:center" font-weight="700" font-family="Ubuntu" letter-spacing="0" word-spacing="0" text-anchor="middle"/>
        </g>
    </svg></button>
</div>
</div>
<div class="songsContainer"></div>
`



function renderMusic() {
 displayContainer.innerHTML = musicHtml;

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
        path:'data/songs/motivation/NO EXCUSES.mp3' ,
        category:'Motivation',
        language: 'English',
    },
    {
        name:"English Maushup - 1",
        path:'data/songs/motivation/english maushup 1.mp3' ,
        category:'Motivation',
        language: 'English',
    },
    {
        name: "Mana ki mushkil hai",
        path: "data/songs/motivation/Mana ki mushkil hai.mp3",
        category: "Motivation",
        language: "Hindi",
    },
    {
        name: "Lakhya",
        path:'data/songs/motivation/Lakshya.mp3',
        category: "Motivation",
        language: "Hindi",
    },
    {
        name:"Zinda",
        path:'data/songs/motivation/zinda.mp3',
        category: "Motivation",
        language: "Hindi",
    },
    {
        name:"Imagine Dragons - Believer",
        path:'data/songs/motivation/Imagine Dragons - Believer.mp3',
        category: "Motivation",
        language: "English",
    },{
        name:"Sia - Unstoppable",
        path:'data/songs/motivation/Sia - Unstoppable.mp3',
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

}