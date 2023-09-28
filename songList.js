const songList = document.getElementById('songList')

function addSong(entry){
    const item = document.createElement('li')
   item.textContent = entry.song
   songList.append(item)
    }

fetch('http://localhost:3000/Songs').then(response=>response.json())
    .then(songs=>songs.forEach(suggestion=>{addSong(suggestion)}))

/*const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function makeAlphabet(alphabet){
    for (let i=0; i <alphabet.length-1; i++){
        const letterSection = document.createElement('dt') 
        letterSection.textContent = i 
        songList.append(letterSection)
        console.log(songList)
    }
}
*/

/*

const letterSection = document.getElementsByTagName('dt')
function addSong(entry){
    const item = document.createElement('dd')
   const songName = entry.song.toString()
   item.textContent= songName
    const firstLetter = songName.charAt(0)
    if (firstLetter === letterSection.textContent){
          letterSection.append(item)
    }
}*/