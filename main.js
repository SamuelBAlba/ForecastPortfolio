const randomInfo = document.querySelector('.random')
const climateInfo = document.querySelector('.climate')
const genericInfo = document.querySelector('.generic')
const weatherFact = document.querySelector(".weatherInfo")
const brickP = document.querySelector('img')
const basicInfo = document.querySelector('.basic')
const nList = document.querySelector('.basicDiv')


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(`https://wttr.in/${event.target.location.value}?format=j1`)
    .then(result => {
       return result.json()
    })
    .then(weather => {

        console.log(weather)

        //document.getElementById('inputCity').value = ""

        const randomH2 = document.createElement('h2')
        randomH2.innerText = 'Random Info'
        randomInfo.prepend(randomH2)

        let pGeneral = document.createElement('p')

        pGeneral.innerHTML = 
        `<span><strong>City: </strong>${weather.nearest_area[0].areaName[0].value}</span>
        <br>
        <span><strong>State: </strong> ${weather.nearest_area[0].region[0].value}</span>
        <br>
        <span><strong>Country:</strong> ${weather.nearest_area[0].country[0].value}</span>
        <br>
        <span><strong>Population:</strong> ${weather.nearest_area[0].population}</span>
        `
        genericInfo.append(pGeneral)

        const climateH2 = document.createElement('h2')
        climateH2.innerText = 'Climate'
        climateInfo.prepend(climateH2)


        const weatherInfo = document.createElement('p')
        weatherInfo.innerHTML = 
        `<span><strong>Currently Feels Like: </strong>${weather.current_condition[0].FeelsLikeF}°F </span>
        <br>
        <span><strong>Daily Low: </strong> ${weather.weather[0].mintempF}°F</span>
        <br>
        <span><strong>Daily High: </strong> ${weather.weather[0].maxtempF}°F</span>
        <br>
        <span><strong>Daily Average: </strong> ${weather.weather[0].avgtempF}°F</span>
        `
        weatherFact.append(weatherInfo)


        const basicH2 = document.createElement('h2')
        basicH2.innerText = 'Basic Neccesities'
        basicInfo.prepend(basicH2)


        if(weather.current_condition[0].FeelsLikeF < 40) {
            const brickP = document.querySelector('img')
             brickP.setAttribute("src", "./assets/Brick.jpeg")

             const pBasic = document.createElement('p')
             pBasic.innerText = "I suggest you avoid this area fam."
             weatherInfo.append(pBasic)

            const pNecc = document.createElement('p')
            pNecc.innerText = 'You need a GOOD coat, scarf and a cozy hat.'
            nList.append(pNecc)


        }else if(weather.current_condition[0].FeelsLikeF > 80) {
            const brickP = document.querySelector('img')
            brickP.setAttribute("src", "./assets/over85.png")

            const pNecc = document.createElement('li')
            pNecc.innerText = 'Some shorts, your shades and a cold drink.'
            nList.append(pNecc)
            


        }else {

            const brickP = document.querySelector('img')
            brickP.setAttribute("src", "./assets/calm.png")

            const pBasic = document.createElement('p')
            pBasic.innerText = "Enjoy the calm weather"
            weatherInfo.append(pBasic)

            const pNecc = document.createElement('p')
            pNecc.innerText = 'A pair of pants, jacket and maybe a sweater will do.'
            nList.append(pNecc)

        }

        if(weather.current_condition[0].uvIndex >= 5){
            const indexP = document.createElement('li')
            indexP.innerText = "Dont forget some good old sunscreen."
            nList.append(indexP)
        }



        
        
    })
})





