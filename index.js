const song_list = [
    {
        id: 1,
        name: "Regression",
        imgSrc: "./thumbnails/Regression.png",
        audioSrc: "./audio/Honkai_Impact_3rd_OST-Regression.mp3",
    },

    {
        id: 2,
        name: "Sadness & Sorrow",
        imgSrc: "./thumbnails/Sadness_&_Sorrow.png",
        audioSrc: "./audio/Honkai_Impact_3rd_OST-Sadness_&_Sorrow.mp3",
    },

    {
        id: 3,
        name: "DUET",
        imgSrc: "./thumbnails/DUET.png",
        audioSrc: "./audio/OMORI_OST-DUET.mp3",
    },

    {
        id: 4,
        name: "Farewell",
        imgSrc: "./thumbnails/Farewell.png",
        audioSrc: "./audio/Steins;Gate_OST-Farewell.mp3",
    },

    {
        id: 5,
        name: "Miki the Witch",
        imgSrc: "./thumbnails/Miki_the_Witch.png",
        audioSrc: "./audio/Devilman_Crybaby_OST-Miki_the_Witch.mp3",
    },

    {
        id: 6,
        name: "BREADY STEADY GO",
        imgSrc: "./thumbnails/BREADY_STEADY_GO.png",
        audioSrc: "./audio/OMORI_OST-BREADY_STEADY_GO.mp3",
    },

    {
        id: 7,
        name: "Mata Ne",
        imgSrc: "./thumbnails/Mata_Ne.jpg",
        audioSrc: "./audio/A_Place_Further_Than_The_Universe_OST-Mata_Ne.mp3",
    },

    {
        id: 8,
        name: "Kiss of Death",
        imgSrc: "./thumbnails/Kiss_of_Death.png",
        audioSrc: "./audio/Re_Zero_OST-Kiss_of_Death.mp3",
    },

    {
        id: 9,
        name: "Love and Lies",
        imgSrc: "./thumbnails/Love_and_Lies.jpg",
        audioSrc: "./audio/Koi_to_Uso_OST-Love_and_Lies.mp3",
    },

    {
        id: 10,
        name: "Confession theme",
        imgSrc: "./thumbnails/Love_and_Lies.jpg",
        audioSrc: "./audio/Koi_to_Uso_OST-Confession theme.mp3",
    },

    {
        id: 11,
        name: "Judgement",
        imgSrc: "./thumbnails/Miki_the_Witch.png",
        audioSrc: "./audio/Devilman_Crybaby_OST-Judgement.mp3",
    },
]

function generateAudiuoCards() {
    let htmlString = "";

    song_list.forEach(function (song, index) {
        let songHTML = `
            <div class="audio">
                <div class="audio_img">
                    <img src="${song.imgSrc}">
                </div>

                <div class="audio_detail">
                    <h2 class="audio_title">
                        ${song.name}
                    </h2>
                    <button class="play_button" onclick="openPlayer(${song.id})">
                        Play
                    </button>
                </div>
            </div>
        `;

        htmlString += songHTML;
    })

    document.getElementById("audios_list").innerHTML = htmlString;
}

generateAudiuoCards();

function playAudio(songId) {
    let song = song_list.find(function (element, index) {
        return element.id === songId;
    });

    document.getElementById("thumbnail").src = song.imgSrc;
    document.getElementById("audio_player_title").innerText = song.name;
    document.getElementById("audio_player").src = song.audioSrc;
    document.getElementById("audio_player").play();
}

function openPlayer(songId) {
    document.getElementById("sec_2").style.display = "block";

    playAudio(songId);
}

function closePlayer() {
    document.getElementById("sec_2").style.display = 'none';
    document.getElementById("audio_player").pause();
    document.getElementById("audio_player").currentTime = 0;
}

closeButton.addEventListener("click", closePlayer);

console.log("Hello!")