const playlistImage=document.getElementById("playlistImage");
const songsCount=document.getElementById("songCount");
const songsList=document.getElementById("songsList");


const preBtn=document.getElementById("preBtn");
const nextBtn=document.getElementById("nextBtn");
const repeatBtn=document.getElementById("repeatBtn");
const shuffleBtn=document.getElementById("shuffleBtn");
const addSongBtn=document.getElementById("addSong");
const time=document.getElementById("time");
let userPlaylist=[];



function loadSong(){
   if(playBtn.innerText=="play_arrow"){
      songPlayer.load();
      songPlayer.play();
      playPause()
   }
   else {
      songPlayer.load();
      songPlayer.play();

   }
   time.innerText=`${songPlayer.currentTime}/${songPlayer.duration}`


}

function selectSong(number){
   songPlayer.innerHTML=`<source src="songs/${userPlaylist[number-1]}" type="audio/mpeg">`
   loadSong()
}


function addSong(mylist) {
   userPlaylist=mylist;
   let counter=1
   for (const song of mylist) {
      songsList.innerHTML += `<tr id="element${counter}"  class="color-white text-center h-6">
                            <td>${counter}</td>
                            <td>${song}</td>
                            <td><i onclick="selectSong(${counter})" class="material-symbols-outlined font-medium">play_arrow</i></td>
                            <td><a class="material-symbols-outlined font-medium" href="songs/${song}">download</a></td>
                            </tr>`

      counter++;
   }
   songsCount.innerText=`${counter} songs`
}

async function sendData() {
   const data = { key: "value" }; // Replace with your actual data

   try {
      const response = await fetch('http://localhost:5000/api/data', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      });
      const result = await response.json();

      // Log the result to the console
      // console.log(result);
      addSong(result.data);




   } catch (error) {
      console.error('Error:', error);
   }
}
sendData();

const playBar=document.getElementById("playBar");
const playBtn=document.getElementById("playBtn");
const songPlayer=document.getElementById("songPlayer");

songPlayer.onloadedmetadata = function(){
   playBar.max = songPlayer.duration;
   playBar.value = songPlayer.currentTime;
}
function playPause(){
   const myValue = playBtn.innerText
   if (myValue == "play_arrow"){
      playBtn.innerText="pause";
      songPlayer.play();
   }
   else {
      playBtn.innerText="play_arrow";
      songPlayer.pause();
   }

}
function showTime(myValue){

   var mins = Math.floor(myValue / 60);
   var secs = Math.floor(myValue % 60);
   if (secs < 10) {
      secs = '0' + String(secs);
   }
   return `${mins}:${secs}`;
}
if(songPlayer.play()){
   setInterval(()=>{

      const currentTime = songPlayer.currentTime
      playBar.value = currentTime;
      time.innerText=`${showTime(currentTime)}/${showTime(songPlayer.duration)}`
   },500);
}

playBar.onchange = function(){
   songPlayer.play();
   songPlayer.currentTime = playBar.value;
   playBtn.innerText="pause"

}



