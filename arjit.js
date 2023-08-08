const music = new Audio("audio/arjit/1.mp3");
// 1. music.play();

// 2. POSTER_SUCCESS
const songs = [
  {
    id: "1",
    songName: `On My Way <br />
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/arjit/1.jpg",
  },
  {
    id: "2",
    songName: `Alan waalker-Fade <br />
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/arjit/2.jpg",
  },
  {
    id: "3",
    songName: `Cartoon - on & on <br />
        <div class="subtitle">Daniel Levi</div>`,
    poster: "img/arjit/3.jpg",
  },
  {
    id: "4",
    songName: `Warriyo - Mortals <br />
        <div class="subtitle">Mortals</div>`,
    poster: "img/arjit/4.jpg",
  },
  {
    id: 5,
    songName: `Ertugrul Gazi <br />
        <div class="subtitle">Ertugrul</div>`,
    poster: "img/arjit/5.jpg",
  },
  {
    id: 6,
    songName: `Electronic Music <br />
        <div class="subtitle">Electro</div>`,
    poster: "img/arjit/6.jpg",
  },
  {
    id: 7,
    songName: `Agar Tum Sath Ho <br />
        <div class="subtitle">Tamashaa</div>`,
    poster: "img/arjit/7.jpg",
  },
  {
    id: 8,
    songName: `Suna Hai <br />
        <div class="subtitle">Neha Kakker</div>`,
    poster: "img/arjit/8.jpg",
  },
  {
    id: 9,
    songName: `Dilber <br />
        <div class="subtitle">Satyameva Jayate</div>`,
    poster: "img/arjit/9.jpg",
  },
  {
    id: 10,
    songName: `Duniya <br />
        <div class="subtitle">Luka Chupi</div>`,
    poster: "img/arjit/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore Di <br />
        <div class="subtitle">Street Dancer 3D</div>`,
    poster: "img/arjit/11.jpg",
  },
  {
    id: 12,
    songName: `Putt Jatt Da <br />
        <div class="subtitle">Putt Jatt Da</div>`,
    poster: "img/arjit/12.jpg",
  },
  {
    id: 13,
    songName: `Baarishein <br />
        <div class="subtitle">Atif Aslam</div>`,
    poster: "img/arjit/13.jpg",
  },
  {
    id: 14,
    songName: `Vaaste  <br />
        <div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "img/arjit/14.jpg",
  },
  {
    id: 15,
    songName: `Lut Gaye <br />
        <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/arjit/15.jpg",
  }
];
// 3.
//It is Use to get poster of songs
// 2nd line is for getting songname

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

// 4.

// const makeALLplays = () => {
//   Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
//     el.classList.add("bi-play-circle-fill");
//     el.classList.remove("bi-pause-circle-fill");
//   });

// 5.

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");

let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/arjit/${index}.mp3`;
    // title changer
    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1];
    makeALLplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

// 6.

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec1 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar");
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  //  volume control is not working
  let vol_a = vol.value;
  // console.log("vol_a:", vol_a);
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;

  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

// 9.
// Scrolling event for Popular Song(WORKING)
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

// Scrolling event for Popular Artists
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

// wave is not working    background of playlist

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;
    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});


// for last music to first music(done)
music.addEventListener("ended", () => {
  // index;
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/arjit/${index}.mp3`;
  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

const next_music = () => {
  // index++;
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/arjit/${index}.mp3`;
  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

// Repeat not working

const repeat_music = () => {
  index;
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/arjit/${index}.mp3`;
  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `audio/arjit/${index}.mp3`;
  // title changer
  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1];
  makeALLplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeat_music();
      break;
    case "next":
      next_music();
      break;
    case "random":
      random_music();
      break;
  }
});
