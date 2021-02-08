let cs = document.getElementById('msTens');
let ds = document.getElementById('msHundreds');
let s = document.getElementById('secondOnes');
let Ds = document.getElementById('secondTens');

let i = 1;
let times = {
    cs:0, ds:0, s:0, Ds:0
}
keys = ['cs', 'ds', 's', 'Ds']

var interval10;

function increment(){
    times.cs += 1;

    for(let i = 1; i < keys.length; i++){
        if (times[keys[i - 1]] === 10){
            times[keys[i-1]] = 0;
            times[keys[i]] += 1;
        }
    }

    cs.textContent = times.cs;
    ds.textContent = times.ds;
    s.textContent = times.s;
    Ds.textContent = times.Ds;

    if(Ds.textContent === '1'){
        window.clearInterval(interval10);
        cs.className = 'redDigit';
        ds.className = 'redDigit';
        s.className = 'redDigit';
        Ds.className = 'redDigit';
        startButton.disabled = false;
    }
}

let startButton = document.getElementById("start");startButton.addEventListener("click", startTimer);

function startTimer(){
    times.Ds = 0;
    cs.className = 'digit';
    ds.className = 'digit';
    s.className = 'digit';
    Ds.className = 'digit';
    interval10 = window.setInterval(increment, 10);
    startButton.disabled = true;
}


