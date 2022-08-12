document.querySelector('button').addEventListener('click', getWeather)
function getWeather() {
let location = document.querySelector('input').value
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=7929b92ebad5af15b6847aebdc5cce24`)
.then(res => res.json())
.then(data => {
    console.log(data[0].lat, data[0].lon)

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=7929b92ebad5af15b6847aebdc5cce24`)
.then(res => res.json())
.then(data => {
    let tempy = data.main.temp
    let f = ((tempy - 273.15) * 9/5 + 32).toFixed(2)
    console.log(data)
    let description = data.weather[0].main
    document.querySelector('h2').innerText = `The Tempature in ${data.name} is ${f} degrees F and the weather description is ${description}`

    if(f > 80) {
        document.querySelector('body').style.background = 'orange'
    }
    else if(f > 60) {
        document.querySelector('body').style.background = 'yellow'
    }
    else if(f > 40) {
        document.querySelector('body').style.background = 'lightgreen'
    }
    else{
        document.querySelector('body').style.background = 'lightblue'
    }

    if(description == 'Clouds' || description == 'Overcast' || description == 'Fog') {
        document.querySelector('.fa-cloud').classList.remove('hidden')
    }
    else{
        document.querySelector('.fa-cloud').classList.add('hidden')
    }
})
.catch(err => console.log(`error ${err}`))
})
.catch(err => console.log(`error ${err}`))

}

