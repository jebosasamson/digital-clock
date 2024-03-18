
const hour = document.querySelector('.hour')
const minutes = document.querySelector('.min')
const seconds = document.querySelector('.seconds')





//Timers function
// setTimeout - run a callback function after a particular time i milliseconds
// setInterval - run a callback function/expression always after a particular time in milliseconds
// clearTimeout - to clear setTimeout
// clearInterval - to clear setInterval

// setTimeout(function(){
//     console.log('Set time out explained')
// }, 5000)

setInterval(function handleTime() {
    const now = new Date()

    console.log(now.getDate())
    let hr = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    if (hr < 10){
        hr = `0${hr}`
    }

    if (min < 10){
        min = `0${min}`
    }

    if (sec < 10){
        sec = '0' + sec
    }

    hour.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec
},1000)

