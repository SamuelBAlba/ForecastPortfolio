const API_KEY = 'cWqHEXctJLKrT0r9yOA7fX1cr5Cq3Ap3'
const baseURL = 'https://api.giphy.com'
const ollieDiv = document.querySelector('div')

fetch(`${baseURL}/v1/gifs/5W5TOAKuoZfa0?api_key=${API_KEY}`)
.then(result => result.json())
.then((ollieGif) => {

    console.log(ollieGif)
    let homeGif = ollieGif.data.images.downsized_large
    .url

    ollieDiv.innerHTML = `<img src=${homeGif} >`




})







//ollieGif.data.images.fixed_height.url



// ollieImage.setAttribute('src', 'ollieGif.data.images.fixed_height.url')
// ollieImage.setAttribute('alt', 'home-image')

