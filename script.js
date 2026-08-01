const songsData = {
    tujanena: {
        title: "Tu Jane Na ❤️",
        audioSrc: "Dagabaaz Re - Rahat Fateh Ali Khan, Shreya Ghoshal.mp3", // Using the same audio as in python script
        initialDelay: 2000,
        lyrics: [
            "🎶 Kaise bataye kyun tujhko chahe... 💕",
            "💫 Yaara bata na paaye... 😔",
            "🌙 Baatein dilon ki dekho jo baaki, aankhein tujhe samjhaye... 👀💞",
            "✨ Tu jaane na... 💖",
            "💞 Tu jaane na.... 🌸",
            "🌤️ Tu jaane na... 💫",
            "❤️ Tu jaane na... 💭"
        ],
        delays: [1200, 1500, 1200, 1800, 2300, 2300, 2000],
        charDelay: 90
    },
    arzkiyahai: {
        title: "Arz Kiya Hai 💫❤️",
        audioSrc: "Arz Kiya Hai - Anuv Jain l Anuv Jain x Coke Studio Bharat l Anuv Jain New Song l#anuvsworld - Anuvsworld.mp3",
        initialDelay: 0,
        lyrics: [
            "Arz kiya hai 💫",
            "Humne bhi likha kuch tere baare mein 🖋️💌",
            "Haathon ko sambhaale mere haathon mein 🤲❤️",
            "Kaise haathon ko sambhaale mere haathon mein? 💭🌸",
            "Jab tak neend na aaye in lakeeron mein 🌙🕊️",
            "Baatein hon… 💞✨",
            "Haaye… 🌼"
        ],
        delays: [1000, 1200, 1000, 1100, 1100, 1100, 1000],
        charDelay: 80
    },
    dagabaaz: {
        title: "Dagabaaz Re ❤️",
        audioSrc: "Dagabaaz Re - Rahat Fateh Ali Khan, Shreya Ghoshal.mp3",
        initialDelay: 1000,
        lyrics: [
            "Dagabaaz re haaye... daghabaaz re...",
            "Tore naina👀... bade dagabaaz re...",
            "Derena derena derena…",
            "Ho tore naina👀… haaye...",
            "Naina👀 naina👀 naina👀 haaye...",
            "🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶 🎶",
            "Dagabaaz re haaye... daghabaaz re...",
            "Tore naina👀 bade dagabaaz re..."
        ],
        delays: [2800, 3500, 2700, 6000, 2600, 7400, 2400, 2000],
        charDelay: 80
    }
};

const audioPlayer = document.getElementById('audio-player');
const disk = document.getElementById('disk');
const currentSongTitle = document.getElementById('current-song-title');
const lyricsDisplay = document.getElementById('lyrics-display');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const songButtons = document.querySelectorAll('.song-btn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');

let currentSongId = null;
let isPlaying = false;
let timeoutIds = [];

songButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        selectSong(btn.dataset.song);
    });
});

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

stopBtn.addEventListener('click', stopSong);

function selectSong(songId) {
    stopSong();
    
    songButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.song-btn[data-song="${songId}"]`).classList.add('active');
    
    currentSongId = songId;
    const song = songsData[songId];
    
    currentSongTitle.textContent = song.title;
    audioPlayer.src = song.audioSrc;
    
    playPauseBtn.disabled = false;
    stopBtn.disabled = false;
    
    // Auto play when selected
    playSong();
}

function playSong() {
    if (!currentSongId) return;
    
    audioPlayer.play();
    isPlaying = true;
    disk.classList.add('spin');
    
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    
    // Start lyrics logic if not already started
    if (lyricsDisplay.innerHTML.includes('placeholder')) {
        startLyrics();
    } else if (audioPlayer.paused === false) {
        // Just resumed, CSS animations continue natively, but our timeout logic would be complex to resume perfectly.
        // For simplicity in this version, resuming just resumes audio. The lyrics sync might be slightly off if paused.
    }
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    disk.classList.remove('spin');
    
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    disk.classList.remove('spin');
    
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    
    lyricsDisplay.innerHTML = '<p class="placeholder">Lyrics will appear here...</p>';
    
    // Clear all scheduled timeouts
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];
}

async function startLyrics() {
    lyricsDisplay.innerHTML = ''; // Clear display
    const song = songsData[currentSongId];
    
    // Initial delay before lyrics start
    await sleep(song.initialDelay);
    if (!isPlaying || currentSongId !== getActiveSongId()) return;
    
    for (let i = 0; i < song.lyrics.length; i++) {
        if (!isPlaying || currentSongId !== getActiveSongId()) break;
        
        const line = song.lyrics[i];
        const lineEl = document.createElement('p');
        lineEl.className = 'lyric-line active';
        lyricsDisplay.appendChild(lineEl);
        
        // Auto scroll
        lyricsDisplay.scrollTop = lyricsDisplay.scrollHeight;
        
        // Type characters
        for (let j = 0; j < line.length; j++) {
            if (!isPlaying || currentSongId !== getActiveSongId()) return;
            
            const charEl = document.createElement('span');
            charEl.className = 'lyric-char visible';
            // Use non-breaking space for spaces to preserve them
            charEl.innerHTML = line[j] === ' ' ? '&nbsp;' : line[j];
            lineEl.appendChild(charEl);
            
            await sleep(song.charDelay);
        }
        
        // Line delay
        if (i < song.delays.length) {
            await sleep(song.delays[i]);
        }
        
        lineEl.classList.remove('active');
    }
}

function sleep(ms) {
    return new Promise(resolve => {
        const id = setTimeout(resolve, ms);
        timeoutIds.push(id);
    });
}

function getActiveSongId() {
    const activeBtn = document.querySelector('.song-btn.active');
    return activeBtn ? activeBtn.dataset.song : null;
}
