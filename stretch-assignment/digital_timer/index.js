let cs = document.getElementById('msTens');
let ds = document.getElementById('msHundreds');
let s = document.getElementById('secondOnes');
let Ds = document.getElementById('secondTens');

let i = 1;
let times = {
    cs:0, ds:0, s:0, Ds:0
}
keys = ['cs', 'ds', 's', 'Ds']

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
    }
}

var interval10 = window.setInterval(increment, 10);