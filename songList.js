const songList = document.getElementById('songList')

function addSong(entry){
    const itemContainer = document.createElement('div')
    const item = document.createElement('p')
    const likes = document.createElement('span')
    const likeButton = document.createElement('button')
    let voteValue = entry.likes

   item.textContent =entry.song.toUpperCase()
   itemContainer.className = 'container'
   likes.textContent= `likes: ${voteValue}`
   likes.className = 'likes'
   songList.append(itemContainer)
   itemContainer.append(item, likeButton, likes)
   item.className= 'song'
   likeButton.className= 'likeButton'
   likeButton.textContent = "I like this song too!"
  
    likeButton.addEventListener('click',(event1)=>{
        likes.textContent = `likes: ${++voteValue}`
        fetch('http://localhost:3000/Songs/'+ entry.id , {
            method:'PATCH',
            headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
           likes: voteValue
            })
            }).then(response=> response.json())
            .then()})}

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


const letterSection = document.getElementsByTagName('dt')
function addSong(entry){
    const item = document.createElement('dd')
   const songName = entry.song.toString()
   item.textContent= songName
    const firstLetter = songName.charAt(0)
    if (firstLetter === letterSection.textContent){
          letterSection.append(item)
    }
    */