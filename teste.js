var sec=0
var min=0
var hora=0
var interval

function twoDigits(digit) {
    if(digit<10){
        return('0'+digit)
    }
    else{
        return(digit)
    }
}

function start(){
    time()
    interval= setInterval(time,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('time').innerText="00:00:00"
}


function time(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hora++
        }
    }
    document.getElementById('time').innerText=twoDigits(sec)+':'+twoDigits(min)+':'+twoDigits(hora)
}