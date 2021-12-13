const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const mothly = document.querySelector('#monthly');

const hours = document.querySelectorAll('.__hours');
const previous = document.querySelectorAll('.__previous');

const url = "../../data.json";

const dailyData = () =>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                previous[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

const weeklyData = () =>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                previous[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

const mothlyData = () =>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                previous[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


daily.addEventListener('click', () => {
    dailyData()
})

weekly.addEventListener('click', () => {
    weeklyData()
})

mothly.addEventListener('click', () => {
    mothlyData()
})