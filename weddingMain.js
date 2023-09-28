const messageForm = document.getElementById('messageForm')
const messageList = document.getElementById('messages')
const songForm= document.getElementById('songForm')
const gallery = document.getElementById('gallery')

fetch('http://localhost:3000/PhotoGallery').then(response=> response.json())
    .then(photos=>{photos.forEach(photo=>addCard(photo))})

function addCard(data){
    const card= document.createElement('card')
    card.className= 'card'
    const front = document.createElement('div')
    front.className='front'
    const back =document.createElement('div')
    back.className='back'
    const title = document.createElement('h2')
    const story = document.createElement('p')
    title.textContent = data.title
    title.className = 'storyTitle'
    title.style.display = 'none'
    story.textContent = data.story
    story.className= 'storyContent'
    const image = document.createElement('img')
    image.className = 'images'
    image.src = data.image
    gallery.append(card)
    card.append(front,back)
    front.append(image, title)
    back.append(story)

    card.addEventListener('click', ()=>{
        card.classList.toggle('flipped')
        })
    card.addEventListener('mouseover', ()=>{
        title.style.display= 'block';
        image.style.opacity= 0.5
    })
    card.addEventListener('mouseleave', ()=>{
        title.style.display = 'none'
        image.style.opacity = 1
    })
    }

//declare function that adds a message to the messages div
function addMessage(entry){
    console.log(entry)
    const message = document.createElement('p')
    message.textContent = `"${entry.message}" -- ${entry.name}`
    messageList.append(message)
    message.style.fontFamily = 'Futura'
}

// fetch database messages that are already present and use function to post them
fetch('http://localhost:3000/Messages').then(response=>response.json())
.then(messages=>{messages.forEach(note=>addMessage(note))})

//add event listener to form, post new message to db, and call function so that it is posted to site
messageForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    fetch('http://localhost:3000/Messages/', {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: event.target.name.value,
            message: event.target.message.value,
        })
    }).then(response=> response.json())
    .then(newEntry=> {addMessage(newEntry)})
    .catch(error=> {console.log(error, response)})
})

//add event listener for song form
songForm.addEventListener('submit',(event2)=>{
    event2.preventDefault();
    fetch('http://localhost:3000/Songs/', {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
           song: event2.target.song.value
        })
    }).then(response=> response.json())
    .then(console.log(event2.target.song.value))
    .catch(error=> {console.log(error, response)})
})
/*
//attempt to bring spotify API into search bar for song entries

//getting access key
const clientID='8c2d32dac4cf40efacfd927a91ff87ab'
const clientSEC= 'acd163f43f714768b6a2fb0f36b75bd7'
const credentials = (`${clientID}:${clientSEC}`).toString('base64');

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(credentials))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const token = body.access_token;
  }
});

const searchInput = document.querySelector('[song-search]')
const songForm = document.getElementById('songForm')

searchInput.addEventListener('input', (e)=>{
    const songEntry = e.target.value.toLowerCase();
    const songMenu = document.createElement('div')
    songMenu.setAttribute('id','songListOptions')

fetch()
    .then(song=>{
        const shown = song.toLowerCase().includes(songEntry)
        songMenu.append(shown)
        /*shown.addEventListener('click',{
            searchInput.textContent = */
    


    /*https://spotify23.p.rapidapi.com/search/',{
    params: {
        q: 'track:' + searchInput,
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '49f8bd1a59msh2c6598263fd36abp10936ajsn12bc9b1d9b76',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        'Authorization': 'Bearer ' + key
      }*/
