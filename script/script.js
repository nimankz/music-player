const playlistImage=document.getElementById("playlistImage");
const songsCount=document.getElementById("songCount");
const songsList=document.getElementById("songsList");

const playBtn=document.getElementById("playbtn");
const preBtn=document.getElementById("prebtn");
const nextBtn=document.getElementById("nextbtn");
const repeatBtn=document.getElementById("repeatbtn");
const shuffleBtn=document.getElementById("shufflebtn");
const addSongBtn=document.getElementById("addSong")
let counter=1;
addSongBtn.addEventListener("change", function(e) {
   console.log(addSongBtn.files)
   songsList.innerHTML += `
<tr $id="${counter}" class="color-white text-center h-6">
                            <td>${counter}</td>
                            <td>${addSongBtn.files[0].name}</td>
                            <td><span class="material-symbols-outlined font-medium">delete</span></td>
                            <td><span class="material-symbols-outlined font-medium">download</span></td>
                            </tr>`
   counter++;
},false)
